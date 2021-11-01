import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  function renderList() {
    return posts.map((post) => (
      <div key={post.id} className='item'>
        <i className='large middle aligned icon user' />
        <div className='content'>
          <div className='description'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
        <UserHeader userId={post.userId} />
      </div>
    ));
  }

  return <div className='ui relaxed divided list'>{renderList()}</div>;
};

const mapStateToProps = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
