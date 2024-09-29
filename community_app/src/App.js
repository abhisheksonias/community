import React, { useState } from 'react';
import PostList from './Components/PostList';
import './App.css';

function SendData(post) {
  fetch('https://sleepy-buck-eloquent.lemme.cloud/api/1a8d9aec-1873-4a28-b8a5-19df7cc561c2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'oat_MjE4OQ.SnhXdnFjRjVaTWlPUTdreVNsTTIyQzVDVWRiX05yT1M0elFsRlhEcDI4MTc2OTk3NDI',
    },
    body: JSON.stringify({
      content: post,
    }),
  });
}

function App() {
  const [posts, setPosts] = useState([]);
  
  const addPost = (content) => {
    const newPost = { id: Date.now(), content, likes: 0, comments: [] }; // Initialize comments as empty array
    setPosts([newPost, ...posts]);
  };

  function poststory(content) {
    SendData(content);
    addPost(content);
  }

  return (
    <div className="app">
      <h1>Community Stories</h1>
      <div className="post-form">
        <textarea id="postContent" placeholder="What's on your mind?" />
        <button onClick={() => poststory(document.getElementById('postContent').value)}>
          Post Story
        </button>
      </div>
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
