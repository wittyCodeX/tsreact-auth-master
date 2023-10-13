import React, { ReactElement } from "react";
import Routers from "./router";
import authToken from "./utils/authToken";

const App: React.FC = (): ReactElement => {
  authToken.set("user", "");

  return (
    <div className="App">
      <Routers />
    </div>
  );
};

export default App;
