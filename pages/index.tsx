import {
  CurrentRefinements,
  Hits,
  Pagination,
  RangeInput,
  RefinementList,
  SortBy,
} from "react-instantsearch-hooks-web";
import Hit from "@/components/ProductItem/ProductItem";
import styles from "./Index.module.css";
import ButtonClearFilter from "@/components/ButtonClearFilter/ButtonClearFilter";
import { Stats } from "@/components/Stats/Stats";

export default function Index(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_menu}>
        <p className={styles.menu_description}>
          Наша компания продает продукцию только оптом и по безналичному
          расчету, работает только с юридическими лицами на основании
          заключенных договоров. Цены, указанные на сайте, не являются публичной
          офертой и носят информационный характер. Все цены указаны в рублях с
          учетом НДС.
        </p>
        <ButtonClearFilter />
        <Stats />
        <div className={styles.titleCategory}>Категории</div>
        <div className={styles.category}>
          <RefinementList
            attribute={"category"}
            classNames={{
              label: styles.reflist_label,
            }}
          ></RefinementList>
        </div>
        <div className={styles.titleCategory}>Цена</div>
        <div className={styles.categoryPrice}>
          <RangeInput
            attribute="price"
            translations={{
              separatorElementText: "-",
              submitButtonText: "Применить",
            }}
          />
        </div>
        <ButtonClearFilter />
      </div>
      <div>
        <div className={styles.filters}>
          <CurrentRefinements
            classNames={{
              root: styles.currentref_root,
              label: styles.currentref_label,
            }}
          ></CurrentRefinements>
          <SortBy
            items={[
              { label: "Default", value: "products" },
              { label: "Price (asc)", value: "products/sort/price:asc" },
              { label: "Price (desc)", value: "products/sort/price:desc" },
            ]}
            classNames={{
              root: styles.sort_price,
            }}
          />
        </div>

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
  );
}
