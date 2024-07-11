import { useState } from "react";
import WebApp from "@twa-dev/sdk";
import { TonConnectButton } from "@tonconnect/ui-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="flex justify-end">
        <TonConnectButton />
      </header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          显示警告
        </button>
      </div>
    </div>
  );
}

export default App;
