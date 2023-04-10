import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { searchClient } from "@/libs/clientTypesense";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <InstantSearch indexName="products" searchClient={searchClient}>
        <Header className={styles.header} />
        <main className={styles.body}>{children}</main>
        <Footer className={styles.footer} />
      </InstantSearch>
    </div>
  );
}
