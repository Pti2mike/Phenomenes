import React, { useContext } from "react";
import Accordions from "./Accordions";
import Evolution from "./Evolution";
import PhenomenesContext from "./MyContexts";

const AllEvolutions = ({
  data,
  setData,
  pheno,
  showDetails,
  setShowDetails,
}) => {
  const {
    phenomenes,
    setPhenomenes,
    phenomeneSelected,
    setPhenomeneSelected,
  } = useContext(PhenomenesContext);
  return (
    <div
      style={{
        width: 700,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <h3>Evolutions</h3>
      {/* <Evolution pheno={pheno} setData={setData} data={data} /> */}

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

      {/* {pheno.evolutions &&
        data
          .find((row) => row._id === pheno._id)
          .evolutions.map((evo, index) => (
            <div key={index} style={{ marginBottom: 5 }}>
              {evo ? (
                <>
                  <Accordions
                    data={data}
                    setData={setData}
                    pheno={pheno}
                    evolution={evo}
                    index={index}
                  />
                </>
              ) : null}
            </div>
          ))} */}
    </div>
  );
};

export default AllEvolutions;
