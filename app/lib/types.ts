type OptionalText = string | null | undefined;

export type HarvardRecord = {
    id: number;
    title?: OptionalText;
    people?: { displayname: string }[] | null;
    dated?: OptionalText;
    primaryimageurl?: OptionalText;
    classification?: OptionalText;
    medium?: OptionalText;
    dimensions?: OptionalText;
    culture?: OptionalText;
    creditline?: OptionalText;
    description?: OptionalText;
    url?: OptionalText;
};

export type HarvardListResponse = {
    info: { page: number; pages: number; totalrecords: number };
    records: HarvardRecord[];
};

export type Artwork = {
    id: number;
    title: string;
    artist: string;
    date: OptionalText;
    image: OptionalText;
    classification: OptionalText;
    medium: OptionalText;
    dimensions: OptionalText;
    culture: OptionalText;
    creditLine: OptionalText;
    description: OptionalText;
    museumUrl: OptionalText;
};

export type ArtworkSearch = {
    artworks: Artwork[];
    page: number;
    totalPages: number;
    total: number;
};

export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

export type { OptionalText };