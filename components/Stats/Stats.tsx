import connectStats from "instantsearch.js/es/connectors/stats/connectStats";
import { useConnector } from "react-instantsearch-hooks-web";
import styles from "./Stats.module.css";

const useStats: any = () => {
  return useConnector(connectStats);
};

export const Stats = () => {
  const { nbHits } = useStats();
  return <div className={styles.stats}>Всего найденого товаров {nbHits}</div>;
};
