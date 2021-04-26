import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchGame } from "../actions/gamesAction";
import { fadeIn } from "../animations";

const Nav = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const getInputValue = (e) => {
    setQuery(e.target.value);
  };

  const searchQuery = (e) => {
    e.preventDefault();
    dispatch(searchGame(query));
    setQuery("");
  };

  const clearSearchResults = () => {
    dispatch({ type: "CLEAR_SEARCHED_GAME" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Title onClick={clearSearchResults}>
        <h1>
          Game<span>Info</span>
        </h1>
      </Title>
      <Search>
        <input value={query} onChange={getInputValue} type="text" />
        <button onClick={searchQuery} type="submit">
          Search
        </button>
      </Search>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  text-align: center;
  padding: 4rem;
`;
const Search = styled(motion.form)`
  margin-top: 1rem;
  max-height: 5%;

  input {
    width: 30%;
    height: 100%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  button {
    font-size: 1.5rem;
    height: 100%;
    padding: 0.54rem 2rem;
    vertical-align: top;
    cursor: pointer;
    border: none;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    outline: none;
    color: white;
    font-weight: bold;
    background-color: #ff7474;
  }
`;

const Title = styled(motion.div)`
  display: inline-block;
  cursor: pointer;
  user-select: none;
  --webkit-user-select: none;
  color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.12rem solid #ff747460;
  transition: background-color 0.25s ease;

  &:hover {
    border: 0.12rem solid #ff747460;
    background-color: #ff747445;
  }

  span {
    color: #ff7474;
    font-weight: bold;
  }
`;
export default Nav;
