import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import ImageContainer from "../molecules/ImageContainer";
import Paragraph from "../atoms/Paragraph";
import logo from "../../images/logo.svg";
import footerLogo from "../../images/footerLogo.svg";
import footerBackground from "../../images/footerBackground.png";
import creditCard from "../../images/creditCard.png";
import H4 from "../atoms/H4";
import H2 from "../atoms/H2";
import List from "../atoms/List";
import Item from "../atoms/Item";
import LinkItem from "../molecules/LinkItem";
import insta from "../../images/insta.png";
const creditStyle = css`
  width: 351px;
`;

const topSectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
  height: 400px;
  box-sizing: border-box;
  max-width: 1600px;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
`;
const logoStyle = css`
  width: 150px;
`;
const pStyle = css`
  text-align: left;
  line-height: 2;
`;

const LinkStyle = css`
  color: #000;
  line-height: 2.5;
  padding: 0;
`;

const ListStyle = css`
  display: block;
  text-align: left;
`;

const leftArticle = css`
  margin: 0 70px 0 0;
`;

const ListContainer = css`
  display: flex;
  width: 400px;
  margin-top: 25px;
  justify-content: space-between;
`;

const middleArticle = css`
  margin: 0;
`;

const rightArticle = css`
  margin: 0 0 0 100px;
`;

const instaList = css`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
`;

const instaImg = css`
  width: 100px;
  margin: 20px 20px 0px 0;
`;

const copyright = css`
  font-size: 1rem;
  color: #686868;
  margin: 35.5px 0 150px 0;
  font-weight: 300;
  font-family: "Monserrat";
  text-align: center;
`;

const Footer = () => {
  const theme = useTheme();

  const footerStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: url(${footerBackground});
    background-position: center center;
  `;

  const h4Style = css`
    color: ${theme.colors["alt-red"]};
    text-align: left;
    &::after {
      content: "";
      height: 3px;
      width: 50px;
      background: ${theme.colors.primary};
      display: block;
      margin: 15px 0 0 0;
    }
  `;

  return (
    <footer className={footerStyle}>
      <section className={topSectionStyle}>
        <article className={leftArticle}>
          <ImageContainer src={footerLogo} className={logoStyle} alt="company logo" />
          <Paragraph className={pStyle}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
          <ImageContainer src={creditCard} className={creditStyle} alt="Credit card" />
        </article>
        <article className={middleArticle}>
          <H4 className={h4Style}>USEFUL LINKS</H4>
          <div className={ListContainer}>
            <List className={ListStyle}>
              <LinkItem className={LinkStyle} value="About" url="/about" />
              <LinkItem className={LinkStyle} value="Menu" url="/about" />
              <LinkItem className={LinkStyle} value="Testimonials" url="/about" />
              <LinkItem className={LinkStyle} value="Contact Us" url="/about" />
            </List>
            <List className={ListStyle}>
              <LinkItem className={LinkStyle} value="Wishlist" url="/about" />
              <LinkItem className={LinkStyle} value="Privacy Policy" url="/about" />
              <LinkItem className={LinkStyle} value="Order Tracking" url="/about" />
              <LinkItem
                className={LinkStyle}
                value="Warranty and Services
              "
                url="/about"
              />
            </List>
          </div>
        </article>
        <article className={rightArticle}>
          <H4 className={h4Style}>INSTAGRAM FEED</H4>
          <List className={instaList}>
            <Item>
              <ImageContainer className={instaImg} src={insta} alt="Instagram pic" />
            </Item>
            <Item>
              <ImageContainer className={instaImg} src={insta} alt="Instagram pic" />
            </Item>
            <Item>
              <ImageContainer className={instaImg} src={insta} alt="Instagram pic" />
            </Item>
            <Item>
              <ImageContainer className={instaImg} src={insta} alt="Instagram pic" />
            </Item>
            <Item>
              <ImageContainer className={instaImg} src={insta} alt="Instagram pic" />
            </Item>
            <Item>
              <ImageContainer className={instaImg} src={insta} alt="Instagram pic" />
            </Item>
          </List>
        </article>
      </section>
      <section>
        <H2 className={copyright}>© 2019, Hot Burgers. All rights reserved</H2>
      </section>
    </footer>
  );
};

export default Footer;
