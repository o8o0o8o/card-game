import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Base } from "../Card/components/Base/Base";
import { Flip } from "../Card/components/effects/Flip/Flip";
import { Gradient } from "../../common/Card/components/backgrounds/Gradient/Gradient";
import { Clubs } from "./components/suits/Clubs/Clubs";
import { Rank } from "./components/Rank/Rank";

export const Card = ({ card }) => {
  const changeBackOfCard = useMemo(() => {
    switch (card.back) {
      case "gradient":
        return <Base element={<Gradient />} />;
      default:
        return <Base />;
    }
  }, [card.back]);

  const changeCardRank = useMemo(() => <Rank rank="K" />, []);

  const changeSuitOfCard = useMemo(() => {
    switch (card.suit) {
      case "gradient":
        return <Base element={<Gradient element={changeCardRank} />} />;
      default:
        return <Clubs />;
    }
  }, [card.suit, changeCardRank]);

  const chooseEffect = useMemo(() => {
    switch (card.effect) {
      case "flip":
        return <Flip back={changeBackOfCard} front={changeSuitOfCard} />;
      default:
        return <Base suit={changeSuitOfCard} rank={changeCardRank} />;
    }
  }, [card.effect, changeBackOfCard, changeCardRank, changeSuitOfCard]);

  return <div>{chooseEffect}</div>;
};

Card.propTypes = { card: PropTypes.object.isRequired };
