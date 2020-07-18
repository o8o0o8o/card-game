import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Base } from "../Card/components/Base/Base";
import { Flip } from "../Card/components/effects/Flip/Flip";
import { Gradient } from "../../common/Card/components/backgrounds/Gradient/Gradient";
import { Spades } from "./components/suits/Spades/Spades";
import { Diamonds } from "./components/suits/Diamonds/Diamonds";

export const Card = ({ card }) => {
  const changeBackOfCard = useMemo(() => {
    switch (card.back) {
      case "gradient":
        return <Base element={<Gradient />} />;
      default:
        return <Base />;
    }
  }, [card.back]);

  const changeCardRank = useMemo(() => {}, []);

  const changeSuitBackOfCard = useMemo(() => {
    switch (card.suit) {
      case "gradient":
        return <Base element={<Gradient element={changeCardRank} />} />;
      default:
        return <Diamonds />;
    }
  }, [card.suit, changeCardRank]);

  const chooseEffect = useMemo(() => {
    switch (card.effect) {
      case "flip":
        return <Flip front={changeBackOfCard} back={changeSuitBackOfCard} />;
      default:
        return <Base element={changeSuitBackOfCard} />;
    }
  }, [card.effect, changeBackOfCard, changeSuitBackOfCard]);

  return <div>{chooseEffect}</div>;
};

Card.propTypes = { card: PropTypes.object.isRequired };
