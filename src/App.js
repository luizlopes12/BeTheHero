import React from "react";
import GlobalStyles from "./global/GlobalStyles";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesManager from "./RoutesManager";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <RoutesManager />
      </Router>
      <Footer />
    </Provider>
  );
};

export default App;
