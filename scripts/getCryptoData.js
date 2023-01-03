import fetch from 'node-fetch';

// dotenv.config();

// const BASE_COMMENTS_API = process.env.BASE_COMMENTS_API || "";
// const APP_ENDPOINT_ID = process.env.APP_ENDPOINT_ID || "";

const API_PATH = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD';

const fetchData = async () => {
  const fetchedData = fetch(API_PATH, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);

  return fetchedData;
};

const returnScoreData = async () => {
  const responseData = await fetchData();
  console.log(responseData);
};

returnScoreData();
