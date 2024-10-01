import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function CommentSection({ comments, setPosts, postId }) {
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  { id: Date.now(), text: commentText, likes: 0, liked: false },
                ],
              }
            : post
        )
      );
      setCommentText('');
    }
  };

  const handleCommentLike = (commentId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId && !comment.liked 
                  ? { ...comment, likes: comment.likes + 1, liked: true } 
                  : comment
              ),
            }
          : post
      )
    );
  };

  return (
    <div className="comment-section">
      <div className="comment-form">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      <div className="comments">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <div className="comment-actions">
              <FontAwesomeIcon
                icon={faHeart}
                className={`heart-icon2 ${comment.liked ? 'liked' : ''}`} 
                onClick={() => handleCommentLike(comment.id)} 
              />{' '}
              ({comment.likes})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
