import { create } from 'zustand';
import { fetchTopCryptos, fetchCryptoDetails } from '../services/api';

const useCryptoStore = create((set) => ({
  cryptos: [],
  selectedCrypto: null,
  loading: false,
  error: null,
  
  // Fetch top cryptocurrencies
  fetchCryptos: async () => {
    set({ loading: true });
    try {
      const data = await fetchTopCryptos();
      set({ cryptos: data, loading: false, error: null });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Select and fetch details for a specific cryptocurrency
  selectCrypto: async (id) => {
    set({ loading: true });
    try {
      const data = await fetchCryptoDetails(id);
      set({ selectedCrypto: data, loading: false, error: null });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Clear selected cryptocurrency
  clearSelectedCrypto: () => set({ selectedCrypto: null }),
}));

export default useCryptoStore;
