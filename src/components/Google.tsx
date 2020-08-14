import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { GoogleType } from "../types";

export const GoogleContext = React.createContext(null as GoogleType | null);

type GoogleProps = {
  apiKey?: string;
  children: React.ReactNode;
};

export default function Google(props: GoogleProps) {
  const [googleVal, setGoogle] = useState(null as GoogleType | null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: props.apiKey ?? "",
      libraries: ["visualization"],
    });
    loader
      .load()
      .then(() => {
        setGoogle(google);
      })
      .catch((rej) => console.error("Error loading Google API:", rej));
  }, []);
  return (
    <GoogleContext.Provider value={googleVal}>
      {props.children}
    </GoogleContext.Provider>
  );
}
