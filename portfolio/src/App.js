import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./home";
import BasicExample from "./home";
import { useRef } from "react";

const divRef = useRef

class App extends React.Component {
  render() {
    return(
      <>
        <div>
          <h1>Bienvenue sur mon application!</h1>
        </div>
        <div ref={divRef} className="App">
          <BasicExample />

          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>

        </div>
        </>
    )
  }
}

export default App;
