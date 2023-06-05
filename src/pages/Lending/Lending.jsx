import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Lending() {
  return (
    <div>
      <p>Lending Page</p>
      <Link to={"/login"}>Login</Link>
      <br />
      <Link to={"/register"}>Register</Link>
    </div>
  );
}

export default Lending;
