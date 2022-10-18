import React from "react";
import Parts from "./Parts";

function Content(props) {
  return (
    <div>
      <Parts title={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Parts title={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Parts title={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  );
}

export default Content;
