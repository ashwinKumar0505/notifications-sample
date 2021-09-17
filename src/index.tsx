import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./components/toast";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
