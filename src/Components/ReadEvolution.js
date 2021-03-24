import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const ReadEvolution = ({ forms, id }) => {
  const [info, setInfo] = useState();
  // console.log(info);

  // console.log("forms", forms);

  useEffect(() => {
    if (forms) {
      for (let index = 0; index < forms.length; index++) {
        // console.log(forms[index]);
        if (forms[index]._id === id) {
          setInfo(forms[index]);
        }
      }
    }
  }, [forms, id]);

  // console.log(info.evolutions);

  return (
    <div
      style={{
        border: "green solid",
        width: 700,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
      }}
    >
      <h3>Evolutions</h3>
      {info && (
        <>
          {info.evolutions.map((evo, index) => (
            <div
              key={index}
              style={{ border: "solid black", marginBottom: 10 }}
            >
              {evo ? (
                <>
                  {/* 1er bloc */}
                  <div style={{ marginBottom: 20 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Apparition</span>
                      {evo.apparation
                        ? format(new Date(evo.apparation), "dd/MM/yyyy")
                        : ""}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Inchangé</span>
                      {evo.unchanged
                        ? format(new Date(evo.unchanged), "dd/MM/yyyy")
                        : ""}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Title 1</span>
                      {evo.title1}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Title 2</span>
                      {evo.title2}
                    </div>
                  </div>

                  {/* 2ème bloc */}
                  <div style={{ marginBottom: 20 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Aggravation</span>
                      {evo.aggravation
                        ? format(new Date(evo.aggravation), "dd/MM/yyyy")
                        : ""}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Disparition</span>
                      {evo.disappear
                        ? format(new Date(evo.disappear), "dd/MM/yyyy")
                        : ""}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Title 3</span>
                      {evo.title3}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Title 4</span>
                      {evo.title4}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ReadEvolution;
