const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';

export const fetchTopCryptos = async () => {
  try {
    const response = await fetch(
      `${COINGECKO_API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return [];
  }
};

export const fetchCryptoDetails = async (id) => {
  try {
    const response = await fetch(`${COINGECKO_API_BASE}/coins/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching crypto details:', error);
    return null;
  }
};
