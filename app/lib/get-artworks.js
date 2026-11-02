import { requestHarvard } from "./harvard-api";

const PAGE_SIZE = 12;
const LIST_FIELDS = "id,title,people,dated,primaryimageurl,classification";
const DETAIL_FIELDS =
    "id,title,people,dated,primaryimageurl,classification,medium,dimensions,culture,creditline,description,url";

function simplifyArtwork(record) {
    const artists = record.people?.map((person) => person.displayname) ?? [];

    return {
        id: record.id,
        title: record.title || "Untitled",
        artist: artists.length > 0 ? artists.join(", ") : "Unknown artist",
        date: record.dated,
        image: record.primaryimageurl,
        classification: record.classification,
        medium: record.medium,
        dimensions: record.dimensions,
        culture: record.culture,
        creditLine: record.creditline,
        description: record.description,
        museumUrl: record.url,
    };
}

export async function searchArtworks({ query, page }) {
    const params = {
        size: PAGE_SIZE,
        page,
        hasimage: 1,
        fields: LIST_FIELDS,
    };

    if (query) {
        params.keyword = query;
    } else {
        params.classification = "Paintings";
    }

    const result = await requestHarvard("/object", params);
    if (result.error) {
        return result;
    }

    const { info, records } = result.data;
    return {
        data: {
            artworks: records.map(simplifyArtwork),
            page: info.page,
            totalPages: info.pages,
            total: info.totalrecords,
        },
    };
}

export async function getArtwork(id) {
    const result = await requestHarvard(`/object/${id}`, {
        fields: DETAIL_FIELDS,
    });
    if (result.error) {
        return result;
    }

    return { data: simplifyArtwork(result.data) };
}