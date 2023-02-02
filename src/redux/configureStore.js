import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cryptosReducer } from './cryptos/cryptos';
import { commentsByIdReducer } from './comments/commentsById';

const rootReducer = combineReducers({
  cryptos: cryptosReducer,
  commentsById: commentsByIdReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export default { store };
