import React from "react";
import Collapsible from "./CollapsibleComponent";
import Experience from "../Experience";
import { experienceOne, experienceTwo, experienceThree } from "../Experience/Data";

const collapsible = () => {
  return (
    <div>
      <Collapsible>
        <Experience {...experienceOne} />
        <Experience {...experienceTwo} />
        <Experience {...experienceThree} />
      </Collapsible>
    </div>
  );
};

export default collapsible;
