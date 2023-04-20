import {
  Hits,
  RangeInput,
  RefinementList,
} from "react-instantsearch-hooks-web";
import Hit from "@/components/ProductItem/ProductItem";
import styles from "./Help.module.css";

export default function Help(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_menu}>
        <RefinementList attribute={"category"}></RefinementList>
        <RangeInput attribute="price" />
      </div>
      <Hits
        classNames={{
          list: styles.hit_list,
          item: styles.hit_item,
        }}
        hitComponent={Hit}
      />
    </div>
  );
}
