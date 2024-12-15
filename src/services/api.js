const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';

// Updated mapping with better-spaced locations
const CRYPTO_ORIGINS = {
  bitcoin: { country: 'USA', latitude: 37.7749, longitude: -122.4194 },      // San Francisco
  ethereum: { country: 'Switzerland', latitude: 46.8182, longitude: 8.2275 }, // Zug
  binancecoin: { country: 'Malta', latitude: 35.8989, longitude: 14.5146 },  // Malta
  ripple: { country: 'USA', latitude: 40.7128, longitude: -74.0060 },        // New York
  cardano: { country: 'Japan', latitude: 35.6762, longitude: 139.6503 },     // Tokyo
  solana: { country: 'USA', latitude: 38.9072, longitude: -77.0369 },        // Washington DC
  polkadot: { country: 'Germany', latitude: 52.5200, longitude: 13.4050 },   // Berlin
  dogecoin: { country: 'USA', latitude: 32.7157, longitude: -117.1611 },     // San Diego (adjusted)
  avalanche: { country: 'Singapore', latitude: 1.3521, longitude: 113.8198 }, // Singapore (moved east)
  chainlink: { country: 'Cayman Islands', latitude: 19.3133, longitude: -71.2546 } // Moved east of original position
};

export const fetchTopCryptos = async () => {
  try {
    const response = await fetch(
      `${COINGECKO_API_BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false`
    );
    const data = await response.json();
    
    // Add country origin data to each cryptocurrency
    return data.map(crypto => ({
      ...crypto,
      country_origin: CRYPTO_ORIGINS[crypto.id] || { 
        country: 'Unknown',
        latitude: 0,
        longitude: 0
      }
    }));
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return [];
  }
};

export const fetchCryptoDetails = async (id) => {
  try {
    const response = await fetch(`${COINGECKO_API_BASE}/coins/${id}`);
    const data = await response.json();
    return {
      ...data,
      country_origin: CRYPTO_ORIGINS[id] || {
        country: 'Unknown',
        latitude: 0,
        longitude: 0
      }
    };
  } catch (error) {
    console.error('Error fetching crypto details:', error);
    return null;
  }
};
