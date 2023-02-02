import fetch from 'node-fetch';

const POST_A_COMMENT_ENDPONT =
  'https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/createcomment';

const response = fetch(POST_A_COMMENT_ENDPONT, {
  method: 'POST',
  body: JSON.stringify({
    id: 'bitcoin',
    username: 'Mert',
    comment: '30% increase in a single week!',
  }),
})
  .then((response) => response)
  .catch((error) => console.log(error));

const data = await response;
console.log(data.status);
