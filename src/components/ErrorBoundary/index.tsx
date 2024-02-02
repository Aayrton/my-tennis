import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Header";

import "./index.scss";

function ErrorBoundary() {
  const error: any = useRouteError();

  return (
    <div className="ErrorBoundary">
      <Header />
      <div className="ErrorContent">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{<i>{error.statusText || error.message}</i>}</p>
      </div>
    </div>
  );
}

export default ErrorBoundary;
