import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import QueryProvider from "./lib/react-query/QueryProvider.tsx";
import { CartProvider } from "./contexts/cartProvider.tsx";
import { UserProvider } from "./contexts/user.tsx";
import ScrollToTop from "./components/shared/scrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <QueryProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </QueryProvider>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
