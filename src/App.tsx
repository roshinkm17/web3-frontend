import { Provider } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import store from "./store/store";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

function App() {
  return (
    <Provider store={store}>
      <DynamicContextProvider
        settings={{
          environmentId: "0977c207-b009-4264-9c5e-3d7bbe9b9e0b",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <Home />
      </DynamicContextProvider>
    </Provider>
  );
}

export default App;
