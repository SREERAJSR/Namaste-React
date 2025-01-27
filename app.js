import React from "react";
import ReactDOM from "react-dom/client";

// create react element using React core function => JsObject
const firstCore = React.createElement(
  "h1",
  { id: "first" },
  "first react element with core"
);
// created react element using jsx => babbel transpiles the jsx to React element => jsObject => render(HtmlElement)
const jsxH1 = (
  <h1 id="second" className="secondJsx">
    Second react element with jsx
  </h1>
);

// create react functional component using normal js function
const proposal = "I love you n*m*s*a";
const NavComponent = function () {
  return (
    <div id="container">
      <h1> React functional component with js normal function </h1>
      <h1>{proposal}</h1>
    </div>
  );
};
// create react functional component using  arrow function
const HeadingComponent = () => (
  <div id="heading">
    <h3>Sreedev is software developer</h3>
    <NavComponent></NavComponent>     
    <NavComponent />
    {NavComponent()}
  </div>
);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<HeadingComponent />);
