import React from "react";
import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <div>
      <h1>MarvelPage</h1>
      <hr />
      <ul>
        <HeroList publisher={"Marvel Comics"} />
      </ul>
    </div>
  );
};
