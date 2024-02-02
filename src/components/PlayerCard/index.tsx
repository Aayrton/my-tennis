import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

import { Player } from "../../types/Player";

import { formatHeight, formatWeight } from "../../utils/playerStatsFormatters";

import "./index.scss";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: FC<PlayerCardProps> = ({
  player: { id, picture, firstname, lastname, data },
}) => {
  const formattedHeight = formatHeight(data.height);
  const formattedWeight = formatWeight(data.weight);

  return (
    <Card className="PlayerCard">
      <div className="AvatarContainer">
        <Avatar alt="" src={picture} sx={{ width: 56, height: 56 }} />
      </div>
      <CardContent className="PlayerCardContent">
        <div className="FullName">{`${firstname} ${lastname}`}</div>
        <div className="Rank">Rank: {data.rank}</div>
        <div className="StatsContainer">
          <div className="StatsTitle">STATS</div>
          <ul className="Stats">
            <li>
              Points: <b>{data.points}</b>
            </li>
            <li>
              Height: <b>{formattedHeight}</b>
            </li>
            <li>
              Weight: <b>{formattedWeight}</b>
            </li>
            <li>
              Age: <b>{data.age}</b>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardActions className="PlayerCardActions">
        <Link to={`/player/${id}`}>See details &gt;</Link>
      </CardActions>
    </Card>
  );
};

export default PlayerCard;
