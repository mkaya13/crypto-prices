import { configureStore } from '@reduxjs/toolkit';
import { cryptosReducer } from './cryptos/cryptos';

export const store = configureStore({
  reducer: cryptosReducer,
});
export default { store };
