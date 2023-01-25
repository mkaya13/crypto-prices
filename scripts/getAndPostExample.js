import fetch from 'node-fetch';

const EXAMPLE_API = 'https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/personn';

const response = fetch(EXAMPLE_API, {
  method: 'POST',
  body: JSON.stringify({
    firstname: 'Nic',
    lastname: 'Raboy',
    username: 'nraboy',
  }),
})
  .then((response) => response)
  .catch((error) => console.log(error));

const data = await response;
console.log(data);
