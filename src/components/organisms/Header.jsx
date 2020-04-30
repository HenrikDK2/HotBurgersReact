import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import LinkItem from "../molecules/LinkItem";
import List from "../atoms/List";
import Img from "../atoms/Img";
import Logo from "../molecules/Logo";
import LogoSrc from "./../../images/logo.svg";
import SearchIcon from "./../../images/search.svg";
import AccountIcon from "./../../images/account.svg";
import CheckoutIcon from "./../../images/checkout.svg";

const Header = () => {
  const theme = useTheme();
  const headerStyle = css`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  `;

  const navStyle = css`
    width: 1093px;
    position: relative;
    background-color: ${theme.colors["bg-nav"]};
    display: flex;
    justify-content: right;
  `;
  const accountStyle = css`
    width: 428px;
    height: 109px;
    padding: 0;
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
    list-style: none;
    background-color: ${theme.colors["alt-red"]};
  `;

  const itemStyle = css`
    margin: 0 50px;
  `;

  return (
    <>
      <Logo src={LogoSrc} />

      <header className={headerStyle}>
        <nav className={navStyle}>
          <List>
            <LinkItem value="home" url="/" />
            <LinkItem value="create" url="/createBurger" />
            <LinkItem value="gallery" url="/gallery" />
            <LinkItem value="testiminials" url="/testiminials" />
            <LinkItem value="contact us" url="/contact" />
          </List>
          <ul className={accountStyle}>
            <li className={itemStyle}>
              <Img src={SearchIcon} alt="Icon" />
            </li>
            <li className={itemStyle}>
              <Img src={AccountIcon} alt="Icon" />
            </li>
            <li className={itemStyle}>
              <Img src={CheckoutIcon} alt="Icon" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
