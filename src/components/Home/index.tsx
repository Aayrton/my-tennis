import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Player } from "../../types/Player";

import PlayerCard from "../PlayerCard";
import ContentLoader from "../ContentLoader";

import "./index.scss";
import { getTwoRandomsPlayers } from "../../utils/getTwoRandomsPlayers";

type PlayersState = [Player, Player] | [];

const Home = () => {
  const players = useLoaderData() as Player[];

  const [gamePlayers, setGamePlayers] = useState<PlayersState>([]);

  useEffect(() => {
    if (players.length) {
      const lol = getTwoRandomsPlayers(players);
      setGamePlayers(lol);
    }
  }, [players]);

  if (!gamePlayers.length) {
    return (
      <div className="home">
        <ContentLoader />
      </div>
    );
  }

  return (
    <div className="home">
      <PlayerCard player={gamePlayers[0]} />
      VS
      <PlayerCard player={gamePlayers[1]} />
    </div>
  );
};

export default Home;
