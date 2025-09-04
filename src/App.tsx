import { Provider } from 'react-redux';

import './App.css';
import Home from './pages/Home';
import store from './store/store';

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';

function App() {
  return (
    <Provider store={store}>
      <DynamicContextProvider
        settings={{
          environmentId: import.meta.env.VITE_ENVIRONMENT_ID,
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <Home />
      </DynamicContextProvider>
    </Provider>
  );
}

export default App;
