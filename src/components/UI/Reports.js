import React from 'react';
import styles from '../../styles/UI.module.css';

const Reports = ({ data, loading }) => {
  if (loading) {
    return (
      <div className={styles.reports}>
        <h2>Loading market data...</h2>
      </div>
    );
  }

  const totalMarketCap = data.reduce((sum, crypto) => sum + crypto.market_cap, 0);
  const top24hGainer = [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)[0];
  const top24hLoser = [...data].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)[0];

  return (
    <div className={styles.reports}>
      <h2>Market Summary</h2>
      
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Market Cap</h3>
          <p>${(totalMarketCap / 1e9).toFixed(2)}B</p>
        </div>

        <div className={styles.statCard}>
          <h3>Tracked Currencies</h3>
          <p>{data.length}</p>
        </div>

        {top24hGainer && (
          <div className={`${styles.statCard} ${styles.gainers}`}>
            <h3>Top Gainer (24h)</h3>
            <p>{top24hGainer.symbol.toUpperCase()}</p>
            <span className={styles.percentage}>
              +{top24hGainer.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        )}

        {top24hLoser && (
          <div className={`${styles.statCard} ${styles.losers}`}>
            <h3>Top Loser (24h)</h3>
            <p>{top24hLoser.symbol.toUpperCase()}</p>
            <span className={styles.percentage}>
              {top24hLoser.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        )}
      </div>

      <div className={styles.marketTable}>
        <h3>Top Cryptocurrencies</h3>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {data.map((crypto, index) => (
                <tr key={crypto.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className={styles.cryptoName}>
                      <img src={crypto.image} alt={crypto.name} />
                      <span>{crypto.name}</span>
                      <span className={styles.symbol}>{crypto.symbol.toUpperCase()}</span>
                    </div>
                  </td>
                  <td>${crypto.current_price.toLocaleString()}</td>
                  <td className={crypto.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}>
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td>${(crypto.market_cap / 1e9).toFixed(2)}B</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
