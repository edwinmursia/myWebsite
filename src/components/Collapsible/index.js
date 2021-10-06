import React from "react";
import Collapsible from "./CollapsibleComponent";
import Experience from "../Experience";
import { experienceOne, experienceTwo, experienceThree, experienceFour, experienceFive } from "../Experience/Data";

const collapsible = () => {
  return (
    <div>
      <Collapsible>
        <Experience {...experienceOne} />
        <Experience {...experienceTwo} />
        <Experience {...experienceThree} />
        <Experience {...experienceFour} />
        <Experience {...experienceFive} />
      </Collapsible>
    </div>
  );
};

export default collapsible;
