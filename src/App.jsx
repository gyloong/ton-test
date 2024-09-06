import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import "./App.css";

const transaction = {
  messages: [
    {
      address:
        "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F", // destination address
      amount: "20000000", //Toncoin in nanotons
    },
  ],
};

const handleShare = () => {
  // Ensure WebApp SDK is ready
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.sendMessage({
      text: "这里是你要分享的消息内容",
    });
  }
};

function App() {
  // 获取当前页面的 URL
  const url = new URL(window.location.href);

  // 创建 URLSearchParams 对象
  const params = new URLSearchParams(url.search);

  // 获取参数值
  const startappParam = params.get("startapp");
  console.log("startappParam ===>", startappParam);

  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const onLanguageChange = (lang) => {
    setOptions({ language: lang });
  };
  return (
    <div>
      <header className="flex justify-end">
        <TonConnectButton />
      </header>
      <div>
        {userFriendlyAddress && (
          <div>
            <span>User-friendly address: {userFriendlyAddress}</span>
            <span>Raw address: {rawAddress}</span>
          </div>
        )}
      </div>
      {wallet && (
        <div>
          <span>Connected wallet: {wallet.name}</span>
          <span>Device: {wallet.device.appName}</span>
        </div>
      )}

      <div>
        <div>
          <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
            Send transaction
          </button>
        </div>

        <div>
          <label>language</label>
          <select onChange={(e) => onLanguageChange(e.target.value)}>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </div>
      </div>
      <button onClick={handleShare}>分享消息</button>
    </div>
  );
}

export default App;
