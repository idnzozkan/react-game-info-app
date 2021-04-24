import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];

  return (
    <GameList>
      {pathId && <GameDetail />}
      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>

      <h2>Popular games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>

      <h2>New games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  margin-bottom: 7rem;
`;
export default Home;
