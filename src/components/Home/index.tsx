import React, { useEffect, useState, FC } from "react";
import { useLoaderData } from "react-router-dom";

import { Player } from "../../types/Player";

import PlayerCard from "../PlayerCard";
import ContentLoader from "../ContentLoader";

import "./index.scss";
import { getTwoRandomsPlayers } from "../../utils/getTwoRandomsPlayers";

type PlayersState = [Player, Player] | [];

const Home: FC<{}> = () => {
  const players = useLoaderData() as Player[];

  const [gamePlayers, setGamePlayers] = useState<PlayersState>([]);

  useEffect(() => {
    if (players.length) {
      const newPlayers = getTwoRandomsPlayers(players);
      setGamePlayers(newPlayers);
    }
  }, [players]);

  if (!gamePlayers.length) {
    return (
      <div className="Home">
        <ContentLoader />
      </div>
    );
  }

  return (
    <div className="Home">
      <h1>Welcome to EuroTennis !</h1>
      <div className="versus">VS</div>
      <div className="CardContainer">
        <div className="CardWrapper">
          <PlayerCard player={gamePlayers[0]} />
        </div>
        <div className="versus-mobile">VS</div>
        <div className="CardWrapper">
          <PlayerCard player={gamePlayers[1]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
