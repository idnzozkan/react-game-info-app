import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/gameDetailsAction";
import { Link } from "react-router-dom";
import { getSmallImage } from "../util";
import { scaleUp } from "../animations";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailsHandler = (id) => {
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <Link to={`/game/${id}`}>
      <StyledGame
        variants={scaleUp}
        initial="hidden"
        animate="show"
        layoutId={`card-${id}`}
        onClick={() => loadDetailsHandler(id)}
      >
        <motion.h3 layoutId={`title-${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image-${id}`}
          src={image ? getSmallImage(image, 420) : ""}
          alt={name}
        />
      </StyledGame>
    </Link>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.4);
  text-align: center;
  background-color: #26262b;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
