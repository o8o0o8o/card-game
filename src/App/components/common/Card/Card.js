import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { BaseOfCard } from "../BaseOfCard/BaseOfCard";
import { Flipper } from "../Effects/Flipper/Flipper";
import { Gradient } from "../BackgroundsForCards/Gradient/Gradient";

export const Card = ({ card }) => {
  const changeBackOfCard = useMemo(() => {
    switch (card.back) {
      case "gradient":
        return <BaseOfCard element={<Gradient />} />;
      default:
        return <BaseOfCard />;
    }
  }, [card.back]);

  const changeCardRank = useMemo(() => {}, []);

  const changeSuitBackOfCard = useMemo(() => {
    switch (card.suit) {
      case "gradient":
        return <BaseOfCard element={<Gradient element={changeCardRank} />} />;
      default:
        return <BaseOfCard />;
    }
  }, [card.suit, changeCardRank]);

  const chooseEffect = useMemo(() => {
    switch (card.effect) {
      case "flip":
        return <Flipper front={changeBackOfCard} back={changeSuitBackOfCard} />;
      default:
        return <BaseOfCard element={<Gradient element={changeCardRank} />} />;
    }
  }, [changeBackOfCard, changeSuitBackOfCard]);

  return <div>{chooseEffect}</div>;
};

Card.propTypes = { card: PropTypes.object.isRequired };
