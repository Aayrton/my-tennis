import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { Player } from "../../types/Player";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: FC<PlayerCardProps> = ({
  player: { id, picture, firstname, lastname, data },
}) => {
  return (
    <Card>
      <CardContent>
        <Avatar alt="Remy Sharp" src={picture} />
        <div>{`${firstname} ${lastname}`}</div>
        <div>Rank: {data.rank}</div>
        STATS
        <ul>
          <li>Points: {data.points}</li>
          <li>Height: {data.height}</li>
          <li>Weight: {data.weight}</li>
          <li>Age: {data.age}</li>
        </ul>
      </CardContent>
      <Link to={`/player/${id}`}>See details &gt;</Link>
    </Card>
  );
};

export default PlayerCard;
