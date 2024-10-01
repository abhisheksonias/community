import React from 'react';
import Post from './Post';

function PostList({ posts, setPosts }) {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} post={post} setPosts={setPosts} />
        ))
      ) : (
        <p>No posts yet. Be the first to share your story!</p>
      )}
    </div>
  );
}

export default PostList;
