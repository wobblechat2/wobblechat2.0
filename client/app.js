import React from "react";
import { render } from "react-dom";

const App = () => {
  // fetch("/api/hello", {
  //   headers: {
  //     accepts: "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  return <div>Now, it works still there hopefully this works.</div>;
};

render(<App />, document.getElementById("root"));
