import React, { useContext } from "react";

import PhenomenesContext from "./MyContexts";
import PhenoCardFill from "./PhenoCardFill";

const PhenomenonCard = ({ showDetails, setShowDetails }) => {
  const { phenomenes } = useContext(PhenomenesContext);

  return (
    <div>
      {phenomenes &&
        phenomenes.map((pheno, index) => (
          <PhenoCardFill
            key={index}
            pheno={pheno}
            index={index}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        ))}
    </div>
  );
};

export default PhenomenonCard;
