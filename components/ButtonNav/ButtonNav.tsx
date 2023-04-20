import { ButtonHeaderProps } from "./ButtonNav.props";
import styles from "./ButtonNav.module.css";

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
