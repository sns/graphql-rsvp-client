import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "../Components/Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});