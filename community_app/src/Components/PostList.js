import React from 'react';
import Post from './Post';

function PostList({ posts, setPosts }) {
  return (
    <div className="post-list">
      {posts.length ? posts.map(post => (
        <Post key={post.id} post={post} setPosts={setPosts} />
      )) : <p>No stories yet. Share something!</p>}
    </div>
  );
}

export default PostList;
