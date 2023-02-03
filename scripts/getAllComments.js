import axios from 'axios';

const ALL_COMMENTS_ENDPOINT = 'https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/comments';

const response = axios(ALL_COMMENTS_ENDPOINT, {
  method: 'GET',
})
  .then((response) => response)
  .catch((error) => console.log(error));

const data = await response;
console.log(data.data);
