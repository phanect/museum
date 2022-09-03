import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import NewPost from '../../components/NewPost/NewPost';

const NewPostPage = ({ location }) => {
  const navigate = useNavigate();
  return location.state && location.state.file ? (
    <NewPost file={location.state.file} hide={() => navigate('/')} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default NewPostPage;
