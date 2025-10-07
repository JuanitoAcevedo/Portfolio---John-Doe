import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./home";
import NavBar from "./home";


class App extends React.Component {

  render() {
    return(
      <>
        <div>
          <h1>Bienvenue sur mon application!</h1>
        </div>
        <div className="App">
          <NavBar />

          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>

        </div>
        </>
    )
  }
}

export default App;
