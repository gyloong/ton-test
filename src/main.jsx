import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WebApp from "@twa-dev/sdk";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import eruda from "eruda";

// 调用 WebApp.ready() 并添加日志
eruda.init();
WebApp.ready();
console.log("WebApp.ready() called");

console.log("WebApp data =>", WebApp);
// 打印 WebApp.initDataUnsafe
console.log("WebApp.initDataUnsafe =>", WebApp.initDataUnsafe);

// 检查 WebApp.initDataUnsafe 是否有数据
if (WebApp.initDataUnsafe) {
  console.log("User info:", WebApp.initDataUnsafe);
} else {
  console.error("WebApp.initDataUnsafe is empty");
}
WebApp.backgroundColor = "#f1b5b5";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://gyloong.github.io/ton-test/manifest.json"
      actionsConfiguration={{ twaReturnUrl: "https://t.me/yoloTonBot/myapp" }}
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
