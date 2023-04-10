import { Hits, HitsPerPage, Pagination } from "react-instantsearch-hooks-web";
import styles from "./Style.module.css";

const Product = ({ hit }: any) => {
  console.log(hit.image);
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={hit.image} alt="" />
      </div>
      <div className={styles.hits_name}>{hit.name}</div>
      <div>Цена: {hit.price}</div>
    </div>
  );
};

export default function Help(): JSX.Element {
  return (
    <>
      <div>
        <Hits
          hitComponent={Product}
          classNames={{
            list: styles.wrapper_hits,
            item: styles.hits_item,
          }}
        />
        <HitsPerPage
          items={[
            { label: "1 hits per page", value: 1, default: true },
            { label: "16 hits per page", value: 16 },
          ]}
        />
        <Pagination></Pagination>
      </div>
    </>
  );
}
