const CACHE_KEY = 'crypto_belli_data';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export const saveToCache = (data) => {
  const cacheData = {
    timestamp: Date.now(),
    data
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
};

export const loadFromCache = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  const { timestamp, data } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(CACHE_KEY);
    return null;
  }

  return data;
};
