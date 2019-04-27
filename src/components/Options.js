import React from "react";
import Option from "./Option";

const Options = props => {
  const optItem = props.opts.map(opt => {
    return (
      <li key={opt}>
        <Option opt={opt} />
      </li>
    );
  });
  return (
    <div>
      <ul>{optItem}</ul>
    </div>
  );
};
export default Options;
