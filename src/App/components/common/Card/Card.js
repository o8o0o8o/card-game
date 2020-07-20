import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Base } from "../Card/components/Base/Base";
import { Flip } from "../Card/components/effects/Flip/Flip";
import { Gradient } from "../../common/Card/components/backgrounds/Gradient/Gradient";
import { Clubs } from "./components/suits/Clubs/Clubs";
import { Diamonds } from "./components/suits/Diamonds/Diamonds";
import { Hearts } from "./components/suits/Hearts/Hearts";
import { Spades } from "./components/suits/Spades/Spades";
import { Rank } from "./components/Rank/Rank";

export const Card = ({ suit, rank, back, effect }) => {
  const changeBackOfCard = useMemo(() => {
    switch (back) {
      case "gradient":
        return <Base element={<Gradient />} />;
      default:
        return <Base />;
    }
  }, [back]);

  const changeCardRank = useMemo(() => <Rank rank={rank} />, [rank]);

  const changeSuitOfCard = useMemo(() => {
    switch (suit) {
      case "diamonds":
        return <Diamonds />;
      case "spades":
        return <Spades />;
      case "hearts":
        return <Hearts />;
      default:
        return <Clubs />;
    }
  }, [suit]);

  const chooseEffect = useMemo(() => {
    switch (effect) {
      case "flip":
        return <Flip back={changeBackOfCard} front={changeSuitOfCard} />;
      default:
        return <Base suit={changeSuitOfCard} rank={changeCardRank} />;
    }
  }, [changeBackOfCard, changeCardRank, changeSuitOfCard, effect]);

  return <div>{chooseEffect}</div>;
};

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
};
