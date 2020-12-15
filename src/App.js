import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Button from './components/Button/Button';
import Post from './components/Post/Post';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import React from 'react';

const data = [{
  firstName: 'Nick',
  lastName: 'JTT',
  email: 'nickjtt357@gmail.com',
  age: 24,
  onlineStatus: true
}];

const mapStateToProps = state => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts }) (function App({ fetchPosts, posts }) {
  const fetch = () => {
    fetchPosts();
  }

  const configButton = { buttonText: 'Get Posts', emitEvent: fetch };

  return <>
    <Header/>
    <Headline header = 'Posts' description = 'Click the button to render posts' data = { data }/>
    <Button { ...configButton }/>
    { posts?.length > 0 && posts.map(post => <Post key = { post.id } title = { post.title } description = { post.body }/>) }
  </>;
});
