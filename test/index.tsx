import React, { useState, useEffect, Fragment } from "react";
import { render } from "react-dom";
import Basic from "./components/Basic";
import RemovingMarkers from "./components/RemovingMarkers";
import { Google } from "../src/index";
import MapProperties from "./components/MapProperties";
import Markers from "./components/Markers";
import HeatMapTest from "./components/HeatMapTest";
import { token } from "./auth";

const tests = [
  <Basic />,
  <RemovingMarkers />,
  <MapProperties />,
  <Markers />,
  <HeatMapTest />,
];
const defaultTest = tests.length - 1;

function App() {
  const [selected, setSelected] = useState(defaultTest);

  // let apiKey = token;
  let apiKey = undefined;

  return (
    <Google apiKey={apiKey}>
      <div className="App">
        <div className="p-3">
          {tests.map((x: React.ReactElement, i) => {
            //@ts-ignore
            const name = x.type.name;
            return (
              <Fragment key={i}>
                {i !== 0 ? " | " : ""}
                <a href="#" onClick={() => setSelected(i)}>
                  {name}
                </a>
              </Fragment>
            );
          })}
        </div>
        {selected}
        {tests[selected]}
      </div>
    </Google>
  );
}

render(<App />, document.getElementById("root"));
