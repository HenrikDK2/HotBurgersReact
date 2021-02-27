import React from "react";
import { css } from "emotion";
import BurgerCreator from "../organisms/BurgerCreator";
import Button from "../atoms/frontPageButton";
const mainStyle = css`
  margin-top: 200px;
`;

const btn = css`
  margin: 0 auto 50px;
`;
const CreateBurger = (props) => {
  return (
    <main className={mainStyle}>
      <section>
        <BurgerCreator />
        <Button value="Order now" href="/createBurger/order" className={btn} />
      </section>
    </main>
  );
};

export default React.memo(CreateBurger);
