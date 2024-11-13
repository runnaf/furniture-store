export const createQueryString = (params) => {
    const query = new URLSearchParams()

    query.append("page", params.page)
    query.append("limit", params.limit)
    query.append("sort", JSON.stringify(params.sort))
    query.append("filter", JSON.stringify(params.filter))

    return query.toString();
};
