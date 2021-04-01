import React from "react";
import Accordions from "./Accordions";

const AllEvolutions = ({ data, setData, pheno }) => {
  return (
    <div
      style={{
        width: 700,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <h3>Evolutions</h3>
      {pheno.evolutions &&
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
          ))}
    </div>
  );
};

export default AllEvolutions;
