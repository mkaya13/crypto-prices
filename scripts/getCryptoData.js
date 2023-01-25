import axios from 'axios';

const config = {
  method: 'get',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD',
  headers: {},
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
