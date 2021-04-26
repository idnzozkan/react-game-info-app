import React from "react";
// Components and pages
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/", "/game/:id"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
