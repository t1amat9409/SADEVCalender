import React from "react";
import ReactDOM from "react-dom";
import SupotsuCalender from "./SupotsuCalender";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SupotsuCalender />, div);
  ReactDOM.unmountComponentAtNode(div);
});
