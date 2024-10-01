import React, { useState } from 'react';
import PostList from './Components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  // Function to add a new post
  const addPost = (content) => {
    const newPost = {
      id: Date.now(),
      content,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  // Function to handle post submission
  const handlePostSubmit = () => {
    const content = document.getElementById('postContent').value;
    if (content) {
      addPost(content);
      document.getElementById('postContent').value = ''; 
    }
  };

  return (
    <div className="app">
      <h1>Community Stories</h1>
      <div className="post-form">
        <textarea id="postContent" placeholder="What's on your mind?" />
        <button onClick={handlePostSubmit}>
          Post Story
        </button>
      </div>
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
