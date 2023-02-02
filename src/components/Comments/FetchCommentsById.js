import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadCommentsById } from '../../redux/comments/commentsById';

export const FetchCommentsById = () => {
  const comments = useSelector((state) => state.commentsById.commentsById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadCommentsById());
  }, [dispatch]);

  console.log(comments);

  return (
    <div>
      <h2>{comments}</h2>
    </div>
  );
};

export default { FetchCommentsById };
