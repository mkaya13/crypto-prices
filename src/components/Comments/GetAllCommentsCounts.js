/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const GetAllCommentsCounts = () => {
  const [commentsCountsById, setcommentsCountsById] = useState([]);

  const getAllCommentsIcons = document.querySelectorAll('.comments-icon');

  console.log(getAllCommentsIcons[0]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          'https://eu-central-1.aws.data.mongodb-api.com/app/crypto-market-comments-api-ksvhg/endpoint/commentcounts',
        );
        setcommentsCountsById(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <ul>
      {commentsCountsById.map((comment, index) => (
        <li key={uuid()}>
          <p>{comment.comment_count}</p>
          <p>{index}</p>
        </li>
      ))}
    </ul>
  );
};

export default { GetAllCommentsCounts };
