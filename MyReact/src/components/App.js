import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};

export default App;
