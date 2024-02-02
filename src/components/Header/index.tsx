import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Header: React.FC<{}> = () => (
  <header className="Header">
    <Link to="/">EuroTennis</Link>
  </header>
);

export default Header;
