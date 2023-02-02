import fetch from 'node-fetch';

const POST_A_COMMENT_COUNT_ENDPONT =
  'https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/addcommentcount';

const response = fetch(POST_A_COMMENT_COUNT_ENDPONT, {
  method: 'POST',
  body: JSON.stringify({
    id: 'tether',
  }),
})
  .then((response) => response)
  .catch((error) => console.log(error));

const data = await response;
console.log(data.status);
