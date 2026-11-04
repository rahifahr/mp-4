import { requestHarvard } from "./harvard-api";
import type {
    Artwork,
    ArtworkSearch,
    HarvardListResponse,
    HarvardRecord,
    Result,
} from "./types";

const PAGE_SIZE = 12;
const LIST_FIELDS = "id,title,people,dated,primaryimageurl,classification";
const DETAIL_FIELDS =
    "id,title,people,dated,primaryimageurl,classification,medium,dimensions,culture,creditline,description,url";

function simplifyArtwork(record: HarvardRecord): Artwork {
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

export async function searchArtworks({
                                         query,
                                         page,
                                     }: {
    query: string;
    page: number;
}): Promise<Result<ArtworkSearch>> {
    const params: Record<string, string> = {
        size: String(PAGE_SIZE),
        page: String(page),
        hasimage: "1",
        fields: LIST_FIELDS,
    };

    if (query) {
        params.keyword = query;
    } else {
        params.classification = "Paintings";
    }

    const result = await requestHarvard<HarvardListResponse>("/object", params);
    if (!result.ok) {
        return result;
    }

    const { info, records } = result.data;
    return {
        ok: true,
        data: {
            artworks: records.map(simplifyArtwork),
            page: info.page,
            totalPages: info.pages,
            total: info.totalrecords,
        },
    };
}

export async function getArtwork(id: string): Promise<Result<Artwork>> {
    if (!/^\d+$/.test(id)) {
        return { ok: false, error: "That doesn't look like a valid artwork ID." };
    }

    const result = await requestHarvard<HarvardRecord>(`/object/${id}`, {
        fields: DETAIL_FIELDS,
    });
    if (!result.ok) {
        return result;
    }

    return { ok: true, data: simplifyArtwork(result.data) };
}