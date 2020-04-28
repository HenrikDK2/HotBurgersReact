import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import LinkItem from "../molecules/LinkItem";
import List from "../atoms/List";

const Header = () => {
  const theme = useTheme();
  const headerStyle = css`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
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
    background-color: ${theme.colors["alt-red"]};
  `;

  return (
    <header className={headerStyle}>
      <nav className={navStyle}>
        <List>
          <LinkItem value="home" url="/" />
          <LinkItem value="menu" url="/menu" />
          <LinkItem value="gallery" url="/gallery" />
          <LinkItem value="testiminials" url="/testiminials" />
          <LinkItem value="contact us" url="/contact" />
        </List>
        <div className={accountStyle}></div>
      </nav>
    </header>
  );
};

export default Header;
