import fetch from 'node-fetch';

const DELETE_ALL_COMMENTS_ENDPOINT = 'https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/deleteallcomments';

const response = fetch(DELETE_ALL_COMMENTS_ENDPOINT, {
  method: 'POST',
  body: JSON.stringify({
    id: 'bitcoin',
  }),
})
  .then((response) => response)
  .catch((error) => console.log(error));

const data = await response;
console.log(data.status);
