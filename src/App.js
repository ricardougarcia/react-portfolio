import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

// Here we are telling REACT (js lib) to render the Portfolio container. Allow app to be leveraged by triggering PortfolioContainer.
const App = () => {
  return (
    <div>
      <PortfolioContainer />
      <div className="bg"></div>
    </div>
  );
};
export default App;
