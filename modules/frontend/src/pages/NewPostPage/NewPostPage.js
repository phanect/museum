import React from 'react';
import { useNavigate, Redirect } from 'react-router-dom';

import NewPost from '../../components/NewPost/NewPost';

const NewPostPage = ({ location }) => {
  const navigate = useNavigate();
  return location.state && location.state.file ? (
    <NewPost file={location.state.file} hide={() => navigate('/')} />
  ) : (
    <Redirect to="/" />
  );
};

export default NewPostPage;
