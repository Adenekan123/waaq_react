import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import QueryProvider from "./lib/react-query/QueryProvider.tsx";
import { CartProvider } from "./contexts/cartProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </QueryProvider>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
