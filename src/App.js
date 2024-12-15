import React, { useEffect } from 'react';
import WorldMap from './components/Map/WorldMap';
import Reports from './components/UI/Reports';
import useCryptoStore from './store/cryptoStore';
import { UPDATE_INTERVAL } from './utils/constants';
import './App.css';

function App() {
  const { cryptos, loading, error, fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
    const interval = setInterval(fetchCryptos, UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchCryptos]);

  if (error) {
    return <div className="App">
      <div className="error-message">Error: {error}</div>
    </div>;
  }

  return (
    <div className="App">
      <header>
        <h1>Crypto Belli</h1>
      </header>
      <main>
        <WorldMap data={cryptos} />
        <Reports data={cryptos} loading={loading} />
      </main>
    </div>
  );
}

export default App;
