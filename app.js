import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
// jsx => babel transplied it into react element
const nav = <h1>Hello from jsx, react element</h1>

// React component
const TitleComponent =()=>(
  <h1>Hello from title comp</h1>
)
const HeadingComponent = () => {
  return (<div id='heading'>
    <TitleComponent />
  <h1>Namaste React from Heading comp</h1>
  </div>);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
