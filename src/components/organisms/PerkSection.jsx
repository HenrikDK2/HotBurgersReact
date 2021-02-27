import React from "react";
import { css } from "emotion";
import ImageContainer from "../molecules/ImageContainer";
import List from "../atoms/List";
import sectionSwitch from "../../images/sectionSwitch.svg";
import PerkItem from "../molecules/PerkItem";
const ListStyle = css`
  height: 654px;
  justify-content: center;
`;

const SectionStyle = css`
  position: relative;
`;

const ImageContainerSwitchDesignTop = css`
  position: absolute;
  top: -35px;
  width: 110vw;
  left: 50%;
  transform: translateX(-50%);
`;

const ImageContainerSwitchDesignBottom = css`
  position: absolute;
  width: 110vw;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
`;

const perkSection = () => {
  return (
    <section className={SectionStyle}>
      <ImageContainer
        src={sectionSwitch}
        className={ImageContainerSwitchDesignTop}
        alt="Just a transition between sections"
      />
      <ImageContainer
        src={sectionSwitch}
        className={ImageContainerSwitchDesignBottom}
        alt="Just a transition between sections"
      />
      <List className={ListStyle}>
        <PerkItem />
        <PerkItem />
        <PerkItem />
        <PerkItem />
      </List>
    </section>
  );
};

export default perkSection;
