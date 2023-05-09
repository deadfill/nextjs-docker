import {
  Hits,
  HitsPerPage,
  InstantSearch,
  Pagination,
  RangeInput,
  RefinementList,
  SortBy,
  InstantSearchServerState,
  InstantSearchSSRProvider,
} from "react-instantsearch-hooks-web";
import Hit from "@/components/ProductItem/ProductItem";
import styles from "./Help.module.css";
import { getServerState } from "react-instantsearch-hooks-server";
import { searchClient } from "@/libs/clientTypesense";
import { createInstantSearchRouterNext } from "react-instantsearch-hooks-router-nextjs";
import singletonRouter from "next/router";
import { renderToString } from "react-dom/server";

type SearchPageProps = {
  serverState?: InstantSearchServerState;
  serverUrl: string;
};

export default function Help({
  serverState,
  serverUrl,
}: SearchPageProps): JSX.Element {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        indexName="products"
        searchClient={searchClient}
        routing={{
          router: createInstantSearchRouterNext({ singletonRouter, serverUrl }),
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.wrapper_menu}>
            <div className={styles.titleCategory}>Категории</div>
            <div className={styles.category}><RefinementList attribute={"category"}></RefinementList></div>
            <div className={styles.titleCategory}>Цена</div>
            <div className={styles.categoryPrice}><RangeInput attribute="price"> </RangeInput></div>
          </div>
          <div>
            <HitsPerPage
              items={[
                { label: "8 hits per page", value: 8, default: true },
                { label: "16 hits per page", value: 16 },
              ]}
            />
            <SortBy
              items={[
                { label: "Default", value: "products" },
                { label: "Price (asc)", value: "products/sort/price:asc" },
                { label: "Price (desc)", value: "products/sort/price:desc" },
              ]}
            />
            <Hits
              classNames={{
                list: styles.hit_list,
              }}
              hitComponent={Hit}
            />
            <Pagination
              classNames={{
                list: styles.list_pagination,
                item: styles.item_pagination,
                link: styles.link_pagination,
              }}
            />
          </div>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

export async function getServerSideProps({ req }: any) {
  const protocol = req.headers.referer?.split("://")[0] || "https";
  const serverUrl = `${protocol}://${req.headers.host}${req.url}`;
  const serverState = await getServerState(<Help serverUrl={serverUrl} />, {
    renderToString,
  });

  return {
    props: {
      serverState,
      serverUrl,
    },
  };
}
