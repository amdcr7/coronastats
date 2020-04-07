import React, { memo } from "react";
import Delimiter from './Delimiter';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = number => {
  const delimiterNumebr = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return delimiterNumebr
};

const MapChart = ({ setTooltipContent, countries }) => {
  return (
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    const { NAME, ISO_A2, POP_EST } = geo.properties;
                    const cnfData = countries.filter(item => item.CountryCode === ISO_A2)
                    const temp = Object.assign(...cnfData)
                    const obj = {
                        'name':NAME.toUpperCase(),
                        'cases': `Total Cases - ${rounded(temp.TotalConfirmed)}`,
                        'recovered': `Total Recovered - ${rounded(temp.TotalRecovered)}`,
                        'deaths': `Total Deaths - ${rounded(temp.TotalDeaths)}`
                    }
                    if(cnfData){                        
                      setTooltipContent(obj);
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#3f51b5",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
  );
};

export default memo(MapChart);
