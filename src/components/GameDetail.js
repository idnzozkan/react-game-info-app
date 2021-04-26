import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { getSmallImage } from "../util";

// Images
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = () => {
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();

  const exitDetailModal = (e) => {
    let element = e.target;
    console.log(e);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getPlatformImage = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStars = (gameRating) => {
    let stars = [];
    let rating = Math.floor(gameRating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img src={starFull} className="rating-star" alt="Full Star" key={i} />
        );
      } else {
        stars.push(
          <img
            src={starEmpty}
            className="rating-star"
            alt="Full Star"
            key={i}
          />
        );
      }
    }

    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailModal}>
          <Detail layoutId={`card-${game.id}`}>
            <Status>
              <div className="rating">
                <motion.h3 layoutId={`title-${game.id}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars(game.rating)}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      src={getPlatformImage(data.platform.name)}
                      alt={data.platform.name}
                      key={data.platform.id}
                    />
                  ))}
                </Platforms>
              </Info>
            </Status>
            <Media>
              <motion.img
                layoutId={`image-${game.id}`}
                src={
                  game.background_image
                    ? getSmallImage(game.background_image, 1280)
                    : ""
                }
                alt={game.name}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.results.map((ss) => (
                <motion.img
                  layout
                  src={getSmallImage(ss.image, 1280)}
                  key={ss.id}
                  alt={game.name}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  z-index: 1;
  width: 100%;
  overflow-y: scroll;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7474;
  }

  &::-webkit-scrollbar-track {
    background-color: #232327;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  background: rgb(56 57 62 / 80%);
  backdrop-filter: blur(500px);
  padding: 2rem 5rem;
  position: absolute;
  left: 10%;
  border-radius: 1rem;
  z-index: 2;

  img {
    width: 100%;
  }
`;

const Status = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .rating-star {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

const Description = styled(motion.div)`
  padding: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
  img {
    border-radius: 0.25rem;
    margin: 1rem 0rem;
  }
`;

export default GameDetail;
