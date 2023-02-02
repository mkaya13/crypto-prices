import React from 'react';
import axios from 'axios';

export const FetchCommentsWithRespectToId = async () => {
  const COMMENTS_ENDPOINT_QUERY_ID = 'https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/getcommentsbyid?id=ethereum';

  const response = axios(COMMENTS_ENDPOINT_QUERY_ID, {
    method: 'GET',
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));

  const data = await response;
  console.log(data);
  return (
    <div>
      <h2>hi</h2>
    </div>
  );
};

export default { FetchCommentsWithRespectToId };
