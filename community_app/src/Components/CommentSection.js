import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function CommentSection({ comments, setComments, postId, setPosts }) {
  const [commentText, setCommentText] = useState('');

  const addComment = () => {
    if (!commentText) return; // Ensure comment is not empty
    
    const newComment = { id: Date.now(), text: commentText, likes: 0 }; // Initialize likes to 0
    setComments([...comments, newComment]);
    setCommentText('');
  
    // Update the posts in the parent
    setPosts(prev =>
      prev.map(p => 
        p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p
      )
    );
  };
  

  const likeComment = (commentId) => {
    const updatedComments = comments.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes < 1 ? comment.likes + 1 : comment.likes - 1 } // Toggle like
        : comment
    );
    setComments(updatedComments);
    setPosts(prev =>
      prev.map(p => p.id === postId ? { ...p, comments: updatedComments } : p)
    );
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <div className="comments">
        {comments.length ? comments.map(comment => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <FontAwesomeIcon
              icon={faHeart}
              className={`heart-icon ${comment.likes > 0 ? 'liked' : ''}`}
              onClick={() => likeComment(comment.id)}
            />{' '}
            ({comment.likes}) {/* Display like count */}
          </div>
        )) : <p>No comments yet.</p>}
      </div>
      <div className="add-comment">
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={addComment}>Comment</button>
      </div>
    </div>
  );
}

export default CommentSection;
