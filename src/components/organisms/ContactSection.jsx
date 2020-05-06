import React from "react";
import { css } from "emotion";
import { useTheme } from "emotion-theming";
import ImageContainer from "../molecules/ImageContainer";
import H2 from "../atoms/H2";
import ContactItem from "../molecules/ContactItem";
import AltButtonLink from "../molecules/AltButtonLink";
import clockSvg from "../../images/clock.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import map from "../../images/map.jpg";
import instagram from "../../images/instagram.svg";

const ContactSection = (props) => {
  const theme = useTheme();
  const contactSection = css`
    background-color: ${theme.colors["alt-red"]};
    display: flex;
    justify-content: space-between;
    max-height: 636px;
  `;

  const articleStyle = css`
    display: flex;
    justify-content: center;
    flex: 1;
    flex-direction: column;
  `;

  const buttonStyle = css`
    justify-self: left;
  `;
  const h2Style = css`
    font-size: 2.5rem;
    margin: 25px 0 0 0;
  `;

  const iconContainer = css`
    display: flex;
  `;

  const iconsStyle = css`
    width: 57px;
    margin: 25px 20px 0 0;
  `;

  const mapStyle = css`
    width: 100%;
    display: flex;
    height: 100%;
  `;

  const asideStyle = css`
    flex: 1;
  `;

  const divStyle = css`
    margin: 0 auto;
    padding: 50px;
  `;

  return (
    <section className={contactSection}>
      <article className={articleStyle}>
        <div className={divStyle}>
          <AltButtonLink className={buttonStyle} href="tel:1-234-567-890">
            Call us
          </AltButtonLink>
          <H2 className={h2Style}>1-234-567-890</H2>
          <ContactItem
            icon={clockSvg}
            p="mon-thu: 11.00 – 23.00"
            span="sat: 12.00 – 23.00  |  sun: 12.00 – 21.00"
          />
          <ContactItem
            icon={clockSvg}
            p="mon-thu: 11.00 – 23.00"
            span="sat: 12.00 – 23.00  |  sun: 12.00 – 21.00"
          />
          <div className={iconContainer}>
            <ImageContainer className={iconsStyle} src={facebook} />
            <ImageContainer src={twitter} className={iconsStyle} />
            <ImageContainer src={instagram} className={iconsStyle} />
          </div>
        </div>
      </article>
      <aside className={asideStyle}>
        <ImageContainer src={map} className={mapStyle} />
      </aside>
    </section>
  );
};

export default ContactSection;
