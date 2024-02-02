import React from "react";
import { useLoaderData } from "react-router-dom";
import { Player } from "../../types/Player";

import ScoresTable from "../ScoresTable";

const PlayerDetails: React.FC<{}> = () => {
  const {
    id,
    firstname,
    lastname,
    shortname,
    sex,
    country,
    picture,
    data,
  } = useLoaderData() as Player;

  return (
    <div>
      <h2>{`${firstname} ${lastname}`}</h2>
      <p>ID: {id}</p>
      <p>Short Name: {shortname}</p>
      <p>Sex: {sex}</p>
      <img src={country.picture} alt={`Flag of ${country.code}`} />
      <img src={picture} alt={`Player ${firstname} ${lastname}`} />
      <p>Rank: {data.rank}</p>
      <p>Points: {data.points}</p>
      <p>Weight: {data.weight}</p>
      <p>Height: {data.height}</p>
      <p>Age: {data.age}</p>
      <ScoresTable scores={data.last} />
    </div>
  );
};

export default PlayerDetails;
