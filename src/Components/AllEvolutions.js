import React, { useContext } from "react";
import Accordions from "./Accordions";
import Evolution from "./Evolution";
import PhenomenesContext from "./MyContexts";

const AllEvolutions = ({ showDetails, setShowDetails }) => {
  const { phenomenes, phenomeneSelected } = useContext(PhenomenesContext);
  return (
    <div
      style={{
        width: 700,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <h3>Evolutions</h3>

      {/* Ajouter une évolution */}
      <Evolution />

      {/* Evolution détails */}
      {showDetails ? (
        <div>
          <span>Evolutions détail</span>
          {phenomeneSelected &&
            phenomenes
              .find((toto) => toto._id === phenomeneSelected._id)
              .evolutions.map((evo, index) => (
                <div key={index}>{evo ? <Accordions evo={evo} /> : null}</div>
              ))}
        </div>
      ) : null}
    </div>
  );
};

export default AllEvolutions;
