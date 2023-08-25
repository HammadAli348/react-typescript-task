import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./config/configureStore";
import MainRoutes from "./Routes";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename={"/"}>
          <MainRoutes />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
