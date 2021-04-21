import React from "react";

const PhenomenesContext = React.createContext({
  phenomenes: [],
  setPhenomenes: () => {},
});

export const PhenomenesProvider = PhenomenesContext.Provider;
export const PhenomenesConsumer = PhenomenesContext.Consumer;

export default PhenomenesContext;
