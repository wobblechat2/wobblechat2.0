import React from "react";
import { render } from "react-dom";

const App = () => {
  fetch("/api").then((response) => alert(response.url));
  return <div>Now, it works still there hopefully this works.</div>;
};

render(<App />, document.getElementById("root"));
