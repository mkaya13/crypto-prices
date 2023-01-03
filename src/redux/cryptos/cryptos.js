import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTIONS
const GET_CRYPTOS = 'crypto-prices/cryptos/GET_CRYPTOS';

const cryptoAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD';

export const LoadCryptos = createAsyncThunk(GET_CRYPTOS, async () => {
  const response = await axios.get(cryptoAPI);
  const cryptos = Object.keys(response.data).map((key) => ({
    id: response.data[key].id,
    symbol: response.data[key].symbol,
    name: response.data[key].name,
    image: response.data[key].image,
    currentPrice: response.data[key].current_price,
  }));
  return cryptos;
});

const initialState = {
  cryptos: [],
};

export function cryptosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_CRYPTOS}/fulfilled`:
      return {
        ...state,
        cryptos: action.payload,
      };
    default:
      return state;
  }
}

export default { cryptosReducer, LoadCryptos };
