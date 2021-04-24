import React from "react";
// Components and pages
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route path={["/", "/game/:id"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
