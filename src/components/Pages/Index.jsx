import React from "react";
import PerkSection from "../organisms/PerkSection";
import ReviewSection from "../organisms/ReviewSection";
import IndexFullBgSection from "../organisms/IndexFullBgSection";
import ContactSection from "../organisms/ContactSection";

const Index = (props) => {
  return (
    <main>
      <IndexFullBgSection />
      <PerkSection />
      <ReviewSection />
      <ContactSection />
    </main>
  );
};

export default React.memo(Index);
