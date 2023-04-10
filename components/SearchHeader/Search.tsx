import styles from "./Search.module.css";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SearchBox } from "react-instantsearch-hooks-web";
import React from "react";

export default function Search(): JSX.Element {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  useEffect(() => setQuery(""), [router.asPath]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuery("");
    router.push(`/search?q=${query}`);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <SearchBox
          classNames={{
            root: styles.wrapper_search,
            form: styles.form_search,
            input: styles.search_input,
            submit: styles.search_button,
            submitIcon: styles.search_icon,
          }}
          placeholder="Я ищу"
        />
      </div>
    </>
  );
}
