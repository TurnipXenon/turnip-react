export const INCLUDE_POSTINGS_PARAMS = "includePostings";

export const createIncludePostingParams = () => {
    const params = new URLSearchParams();
    params.append(INCLUDE_POSTINGS_PARAMS, 'true');
    return params;
};
