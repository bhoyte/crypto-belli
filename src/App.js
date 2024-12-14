import React, { useState, useEffect } from 'react';
import WorldMap from './components/Map/WorldMap';
import Reports from './components/UI/Reports';
import { fetchTopCryptos } from './services/api';
import { loadFromCache, saveToCache } from './services/storage';
import { UPDATE_INTERVAL } from './utils/constants';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      // Try to load from cache first
      const cachedData = loadFromCache();
      if (cachedData) {
        setCryptoData(cachedData);
        return;
      }

      // If no cache, fetch fresh data
      const data = await fetchTopCryptos();
      if (data.length > 0) {
        setCryptoData(data);
        saveToCache(data);
      }
    };

    loadData();
    const interval = setInterval(loadData, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Crypto Belli</h1>
      </header>
      <main>
        <WorldMap cryptoData={cryptoData} />
        <Reports dailyData={cryptoData} />
      </main>
    </div>
  );
}

export default App;
