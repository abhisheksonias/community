import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CommentSection from './CommentSection'; // Import CommentSection

function Post({ post, setPosts }) {
  const [likeCount, setLikeCount] = useState(post.likes);
  const [liked, setLiked] = useState(post.likes > 0); // Initial state based on whether post is liked
  const [comments, setComments] = useState(post.comments || []); // Initialize comments state

  const handleLike = () => {
    const newLikeCount = liked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    setLiked(!liked);
    setPosts(prev => prev.map(p => p.id === post.id ? { ...p, likes: newLikeCount } : p));
  };

  return (
    <div className="post">
      <p><strong>{post.content}</strong></p>
      <div className="post-actions">
        <FontAwesomeIcon
          icon={faHeart}
          className={`heart-icon2 ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        />{' '}
        ({likeCount})
      </div>

      {/* Add the CommentSection here */}
      <CommentSection 
        comments={comments}
        setComments={setComments}
        postId={post.id}
        setPosts={setPosts}
      />
    </div>
  );
}

export default Post;
