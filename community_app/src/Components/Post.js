import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CommentSection from './CommentSection'; 

function Post({ post, setPosts }) {
  const [liked, setLiked] = useState(post.likes > 0); 

  // Handle post like
  const handleLike = () => {
    const newLikeCount = liked ? post.likes - 1 : post.likes + 1;
    setLiked(!liked);
    setPosts(prev =>
      prev.map(p => p.id === post.id ? { ...p, likes: newLikeCount } : p)
    );
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-pic"></div> {/* Empty circle as profile picture */}
        <p><strong>{post.content}</strong></p>
      </div>
      <div className="post-actions">
        <FontAwesomeIcon
          icon={faHeart}
          className={`heart-icon2 ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        />{' '}
        ({post.likes})
      </div>

      {/* Comment section */}
      <CommentSection
        comments={post.comments}
        postId={post.id}
        setPosts={setPosts}
      />
    </div>
  );
}

export default Post;
