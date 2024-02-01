import React, { FC, useEffect, useState } from "react";

import { getPlayers } from "../services/player";

import { Player } from "../types/Player";

type PlayersState = [Player, Player] | [];

const Home: FC<{}> = () => {
  const [players, setPlayers] = useState<PlayersState>([]);

  useEffect(() => {
    retrievePlayers();
  }, []);

  const retrievePlayers = async () => {
    try {
      const data = await getPlayers();
      console.log(data);
      console.log(data[0]);
      setPlayers([data[0], data[1]]);
    } catch (error) {
      console.log("error while retrieving players data");
    }
  };

  return <div></div>;
};

export default Home;
