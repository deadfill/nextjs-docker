import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "91.210.170.61",
        port: "8108",
        protocol: "http",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60,
  },
  additionalSearchParameters: {
    queryBy: "name",
  },
});

export const searchClient = typesenseInstantsearchAdapter.searchClient;
