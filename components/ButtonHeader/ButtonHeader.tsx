import { ButtonHeaderProps } from "./ButtonHeader.props";
import styles from "./ButtonHeader.module.css";

export default function ButtonHeader({
  children,
  ...props
}: ButtonHeaderProps): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
