import { ClearRefinements } from "react-instantsearch-hooks-web";
import styles from "./ButtonClearFilter.module.css";

export default function ButtonClearFilter(): JSX.Element {
  return (
    <ClearRefinements
      translations={{
        resetButtonText: "Очистить фильтры",
      }}
      classNames={{
        root: styles.wrapper_button,
        button: styles.clear_button,
      }}
    />
  );
}
