import React from "react";
import Avatar from "@mui/material/Avatar";
import { useLoaderData } from "react-router-dom";
import { Player } from "../../types/Player";

import ScoresTable from "../ScoresTable";
import { Card, CardContent } from "@mui/material";

import { formatHeight, formatWeight } from "../../utils/playerStatsFormatters";
import InfoField from "../InfoField/index";
import ContentLoader from "../ContentLoader/index";

import "./index.scss";

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

  const formattedHeight = formatHeight(data.height);
  const formattedWeight = formatWeight(data.weight);

  if (!id) {
    return (
      <div className="PlayerDetails">
        <ContentLoader />
      </div>
    );
  }

  return (
    <div className="PlayerDetails">
      <div className="AvatarContainer">
        <Avatar alt="" src={picture} sx={{ width: 100, height: 100 }} />
      </div>
      <h1>{`${firstname} ${lastname}`}</h1>

      <h2>Informations</h2>
      <Card className="InformationsContainer">
        <CardContent>
          <InfoField label="Alias" value={shortname} />
          <InfoField
            label="Country"
            value={
              <img
                className="Country"
                src={country.picture}
                alt={`Flag of ${country.code}`}
              />
            }
          />
          <InfoField label="Gender" value={sex} />
          <InfoField label="Rank" value={data.rank} />
          <InfoField label="Points" value={data.points} />
          <InfoField label="Weight" value={formattedHeight} />
          <InfoField label="Height" value={formattedWeight} />
          <InfoField label="Age" value={data.age} />
        </CardContent>
      </Card>
      <h2>Scores</h2>
      <ScoresTable scores={data.last} />
    </div>
  );
};

export default PlayerDetails;
