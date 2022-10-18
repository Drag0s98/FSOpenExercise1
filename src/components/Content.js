import React from "react";
import Parts from "./Parts";

function Content(props) {
  return (
    <div>
      <Parts title={props.content.part1} exercises={props.content.exercises1} />
      <Parts title={props.content.part2} exercises={props.content.exercises2} />
      <Parts title={props.content.part3} exercises={props.content.exercises3} />
    </div>
  );
}

export default Content;
