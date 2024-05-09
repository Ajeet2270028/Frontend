import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </>
);
