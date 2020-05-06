import React from "react";
import { css, keyframes } from "emotion";
import { useTheme } from "emotion-theming";
import FullscreenBG from "../atoms/FullscreenBG";
import design from "../../images/design.png";
import Button from "../atoms/frontPageButton";
import bgSrc from "./../../images/topBackgroundIndex.jpg";
import PerkSection from "../organisms/PerkSection";
import H2 from "../atoms/H2";
import H4 from "../atoms/H4";
import Paragraph from "../atoms/Paragraph";
import underlineImg from "../../images/underLine.svg";
import scrollDown from "../../images/scrollDown.svg";
import ImageContainer from "../molecules/ImageContainer";
import reviewWoman from "../../images/womanReview.jpg";
import quote from "../../images/quote.svg";

const Index = (props) => {
  const theme = useTheme();
  const fade = keyframes`
  to{
    will-change: opacity;
    opacity: 0;
    transform: translate(-50%, 20px);
  }
`;
  const divStyle = css`
    position: absolute;
    margin: 0;
    padding: 0;
    top: 345px;
    left: 172px;
  `;

  const h4Style = css`
    font-size: 1.875rem;
    color: ${theme.colors.bgText};
    max-width: 380px;
    top: 55%;
    left: 35%;
    font-family: "Montserrat";
    font-weight: bold;
    font-style: normal;
    margin: 0;
    transform: translate(-50%, -50%);
    position: absolute;
  `;

  const divBgStyle = css`
    background: url(${design});
    height: 172px;
    width: 783px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
  `;

  const sectionStyle = css`
    background: #fff;
    padding-top: 30px;
  `;

  const AltH2Style = css`
    text-align: center;
    font-size: 2.5rem;
    margin-top: 20px;
    font-weight: 300;
    color: ${theme.colors["alt-red"]};
    letter-spacing: 5px;
    &::after {
      content: "";
      display: block;
      width: 377px;
      height: 13px;
      margin: 25px auto 0;
      background-repeat: no-repeat;
      background: url(${underlineImg});
    }
  `;

  const scrollDownStyle = css`
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 63px;
    opacity: 1;
    ${2 ? "" : `animation:  ${fade} 1s ease;`}
  `;

  const reviewWomanStyle = css`
    width: 600px;
    position: relative;
    transform-style: preserve-3d;
    margin-right: 70px;
    &::after {
      content: "";
      position: absolute;
      width: 61.8%;
      height: 57.08%;
      transform: translateZ(-1px) translate(-30%, 25%);
      bottom: 0;
      left: 0;
      background-color: ${theme.colors["alt-red"]};
    }
  `;

  const articleStyle = css`
    padding: 0 0 200px 100px;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
  `;

  const reviewParagraph = css`
    max-width: 700px;
    text-align: left;
    line-height: 2;
    letter-spacing: 1px;
    font-size: 1rem;
  `;

  const reviewJob = css`
    text-align: left;
    letter-spacing: 1px;
    margin: 0;
    font-size: 1rem;
  `;

  const paragraphStyle = css`
    margin-top: 30px;
  `;

  const quoteStyle = css`
    width: 100px;
    margin-bottom: 55px;
  `;

  const authorStyle = css`
    text-align: left;
    font-size: 1.65rem;
    margin: 73px 0 0 0;
    &::after {
      content: "";
      margin-left: 39px;
      display: inline-block;
      width: 50px;
      height: 2px;
      background-color: ${theme.colors["alt-red"]};
      vertical-align: middle;
    }
  `;

  return (
    <main>
      <FullscreenBG src={bgSrc}>
        <ImageContainer
          src={scrollDown}
          className={scrollDownStyle}
          alt="You are able to scroll down, this is an indicator."
        />
        <div className={divStyle}>
          <H2>Party Time!</H2>
          <div className={divBgStyle}>
            <h4 className={h4Style}>
              Create your burger and get 1.5L Pepsi Free
            </h4>
          </div>
          <Button value="Create Now" href="/createBurger" />
        </div>
      </FullscreenBG>

      <PerkSection />
      <section className={sectionStyle}>
        <H2 className={AltH2Style}>Client Testimonials</H2>
        <Paragraph className={paragraphStyle}>
          Try our Most Delicious food and it usually take minutes to deliver!
        </Paragraph>
        <article class={articleStyle}>
          <ImageContainer
            src={reviewWoman}
            className={reviewWomanStyle}
            alt="Woman review our product"
          />
          <div>
            <ImageContainer
              className={quoteStyle}
              src={quote}
              alt="Quote of the review woman"
            />
            <Paragraph className={reviewParagraph}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Paragraph>
            <H4 className={authorStyle}>Nina Margaret</H4>
            <Paragraph className={reviewJob}>CEO, Abc Company</Paragraph>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Index;
