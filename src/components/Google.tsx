import React, { useEffect, useState } from "react";
import { Loader } from "google-maps";
import { GoogleType } from "../types";

export const GoogleContext = React.createContext(null as GoogleType | null);

type GoogleProps = {
  apiKey?: string;
  children: React.ReactNode;
};

export default function Google(props: GoogleProps) {
  const [google, setGoogle] = useState(null as GoogleType | null);
  useEffect(() => {
    const loader = new Loader(props.apiKey);
    loader
      .load()
      .then((google) => {
        setGoogle(google);
      })
      .catch((rej) => console.error("Error loading Google API:", rej));
  }, []);
  return (
    <GoogleContext.Provider value={google}>
      {props.children}
    </GoogleContext.Provider>
  );
}
