import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import MapChart from "./MapChart";

export default function App({countries}) {
  const [content, setContent] = useState("");
  console.log(typeof(content))
  return (
    <div>
      <MapChart setTooltipContent={setContent} countries={countries}/>
      {content.name !== undefined && <ReactTooltip data-offset={content}>
         <ul>
             {content.name}
             <li> {content.cases}</li>
             <li> {content.recovered}</li>
             <li>{content.deaths} </li>
         </ul> 
      </ReactTooltip>}
    </div>
  );
}
