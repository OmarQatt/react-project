import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import Main from "./component/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./component/SelectedBeast";
import addimg from "./addimg.json";

class App extends React.Component {
 
  render() {
    return (
      <div>
        <br />
        <div>
          <strong>
            <Header />
          </strong>
        </div>
        <br />


        <div>
          <Main />
        </div>

        <br />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
