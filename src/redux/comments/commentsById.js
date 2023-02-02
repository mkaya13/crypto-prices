import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ACTIONS
const GET_COMMENTS_BY_ID = 'crypto-prices/cryptos/GET_COMMENTS_BY_ID';

export const LoadCommentsById = createAsyncThunk(
  GET_COMMENTS_BY_ID,
  async (cryptoId) => {
    const commentByIdAPI = `https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/getcommentsbyid?id=${cryptoId}`;
    const response = await axios.get(commentByIdAPI);
    const commentsById = Object.keys(response.data).map((key) => ({
      id: response.data[key].id,
      username: response.data[key].username,
      comment: response.data[key].comment,
    }));
    return commentsById;
  },
);

const initialState = {
  commentsById: [],
};

export function commentsByIdReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_COMMENTS_BY_ID}/fulfilled`:
      return {
        ...state,
        commentsById: action.payload,
      };
    default:
      return state;
  }
}

export default { commentsByIdReducer, LoadCommentsById };
