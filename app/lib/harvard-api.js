const BASE_URL = "https://api.harvardartmuseums.org";
const TIMEOUT_MS = 8000;

function errorForStatus(status) {
    if (status === 429) {
        return "The daily API limit has been reached. Please try again tomorrow.";
    }
    if (status === 401 || status === 403) {
        return "The museum API rejected our API key.";
    }
    if (status === 404) {
        return "We couldn't find that item.";
    }
    return "The museum API is having problems. Please try again later.";
}

export async function requestHarvard(path, params = {}) {
    const key = process.env.HARVARD_API_KEY;
    if (!key) {
        return { error: "The server is missing its API key configuration." };
    }

    const query = new URLSearchParams({ ...params, apikey: key });

    try {
        const response = await fetch(`${BASE_URL}${path}?${query}`, {
            cache: "no-store",
            signal: AbortSignal.timeout(TIMEOUT_MS),
        });

        if (!response.ok) {
            return { error: errorForStatus(response.status) };
        }

        return { data: await response.json() };
    } catch {
        return {
            error: "We couldn't reach the museum API. Please try again later.",
        };
    }
}