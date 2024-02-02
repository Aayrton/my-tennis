import React from "react";
import { CircularProgress } from "@mui/material";

const ContentLoader: React.FC<{}> = () => {
  return (
    <div className="home">
      <CircularProgress data-testid="content-loader" />
    </div>
  );
};

export default ContentLoader;
