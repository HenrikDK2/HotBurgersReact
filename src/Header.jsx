import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";

const Header = () => {
  const theme = useTheme();
  const headerStyle = css`
    position: absolute;
    top: 0;
    right: 0;
  `;

  const navStyle = css`
    width: 1093px;
    position: relative;
    background-color: ${theme.colors["bg-nav"]};
    display: flex;
    justify-content: right;
    height: 109px;
  `;
  const accountStyle = css`
    width: 428px;
    height: 109px;
    background-color: ${theme.colors["alt-red"]};
  `;

  const ulStyle = css`
    box-sizing: border-box;
    padding: 0;
    display: flex;
    margin: 0;
    font-size: 1rem;
    align-items: center;
    list-style: none;
  `;

  const itemStyle = css`
    box-sizing: border-box;
    padding: 0 30px;
  `;

  const linkStyle = css`
    text-decoration: none;
    font-family: "Montserrat";
    position: relative;
    font-weight: 300;
    font-style: normal;
    color: ${theme.colors.text};
    &::after {
      background-color: ${theme.colors.primary};
      width: 150%;
      height: 40px;
      content: "";
      position: absolute;
      transform: translateX(-50%);
      top: -50px;
      left: 50%;
    }
  `;

  return (
    <header className={headerStyle}>
      <nav className={navStyle}>
        <ul className={ulStyle}>
          <li className={itemStyle}>
            <a className={linkStyle} href="/">
              Home
            </a>
          </li>
          <li className={itemStyle}>
            <a className={linkStyle} href="/">
              Menu
            </a>
          </li>
          <li className={itemStyle}>
            <a className={linkStyle} href="/">
              Gallery
            </a>
          </li>
          <li className={itemStyle}>
            <a className={linkStyle} href="/">
              Testiminials
            </a>
          </li>
          <li className={itemStyle}>
            <a className={linkStyle} href="/">
              Contact Us
            </a>
          </li>
        </ul>
        <div className={accountStyle}></div>
      </nav>
    </header>
  );
};

export default Header;
