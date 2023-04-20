import styles from "./Header.module.css";
import Logo from "../../public/logo.svg";
import Navbar from "../Navbar/Navbar";
import { HeaderProps } from "./Header.props";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Link from "next/link";
import Search from "../SearchHeader/Search";

export default function Header({ ...props }: HeaderProps): JSX.Element {
  return (
    <header {...props}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} href={"/"}>
          <Logo />
        </Link>

        <ButtonMenu className={styles.header_button} appearance="ghost">
          {}
        </ButtonMenu>
        <Search className={styles.search}></Search>
        <Navbar className={styles.navbar} />
      </div>
    </header>
  );
}
