import React, { useState } from "react";
import { Form } from "react-bootstrap";

const PainBar = React.forwardRef(({ onChange, ...rest }, ref) => {
  onChange = (e) => {
    setRange(parseInt(e.target.value));
  };

  console.log(rest);

  const [range, setRange] = useState(1);

  return (
    <div id="slidecontainer">
      <div style={{ display: "flex" }}>
        <Form.Group
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Form.Control
            type="range"
            defaultValue={1}
            // value={range}
            // onChange={onChangeRange}
            min={1}
            max={10}
            ref={ref}
            {...rest}
            style={{ width: 440, marginTop: 15 }}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <i id="douleur"></i> */}
          {range}/10
        </div>
      </div>
    </div>
  );
});

export default PainBar;
