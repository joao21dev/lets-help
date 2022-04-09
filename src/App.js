import React from "react";
import { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Sobre from "./Sobre";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Contato from "./Contato";
import Campanhas from "./Campanhas";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/campanhas" component={Campanhas} />
          <Route path="/contato" component={Contato} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
