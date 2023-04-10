import styles from "./Navbar.module.css";
import Link from "next/link";
import { MenuProps, NavbarProps } from "./Navbar.prop";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import CartSvg from "../../public/icon/headerIcon/cart.svg";
import FavSvg from "../../public/icon/headerIcon/favSvg.svg";
import UserSvg from "../../public/icon/headerIcon/userSvg.svg";

const menuItem: MenuProps[] = [
  {
    route: "/",
    name: "Корзина",
    icon: <CartSvg />,
  },
  {
    route: "about",
    name: "Избраное",
    icon: <FavSvg />,
  },
  {
    route: "help",
    name: "Профиль",
    icon: <UserSvg />,
  },
];

export default function Navbar({ ...props }: NavbarProps): JSX.Element {
  const buildMenu = menuItem.map(({ route, name, icon }, id) => {
    return (
      <li className={styles.li} key={id}>
        <Link href={`${route}`}>
          <ButtonHeader>
            {icon}
            {name}
          </ButtonHeader>
        </Link>
      </li>
    );
  });

  return (
    <nav {...props}>
      <ul className={styles.wrapper}>{buildMenu}</ul>
    </nav>
  );
}
