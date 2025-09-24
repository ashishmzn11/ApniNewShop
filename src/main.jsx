import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import Product from "./components/Product/Product.jsx";
import { AppProvider } from "./store/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
    <BrowserRouter>
    
      <App />
    
    </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
