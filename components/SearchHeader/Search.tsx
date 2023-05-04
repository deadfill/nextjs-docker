import styles from "./Search.module.css";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CurrentRefinements, SearchBox } from "react-instantsearch-hooks-web";
import React from "react";
import clsx from "clsx";
import { SearchProps } from "./Search.props";

export default function Search({
  className,
  ...props
}: SearchProps): JSX.Element {
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
      <div className={styles.wrapperref}>
        <SearchBox
          classNames={{
            root: clsx(styles.wrapper_search, className),
            form: styles.form_search,
            input: styles.search_input,
            submit: styles.search_button,
            reset: styles.search_reset,
            submitIcon: styles.search_icon,
          }}
          {...props}
          placeholder="Я ищу"
        />
        <CurrentRefinements
          classNames={{
            root: styles.currentref_root,
            label: styles.currentref_label,
          }}
        ></CurrentRefinements>
      </div>
    </>
  );
}
