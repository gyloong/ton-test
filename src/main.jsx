import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WebApp from "@twa-dev/sdk";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://gyloong.github.io/ton-test/manifest.json">
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
