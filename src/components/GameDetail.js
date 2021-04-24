import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { getSmallImage } from "../util";

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

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailModal}>
          <Detail>
            <Status>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Status>
            <Media>
              <img
                src={getSmallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.results.map((ss) => (
                <img
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
  width: 100%;
  overflow-y: scroll;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f83554;
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

  img {
    width: 100%;
  }
`;

const Status = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  }
`;

const Description = styled(motion.div)`
  padding: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
  img {
    margin: 1rem 0rem;
  }
`;

export default GameDetail;
