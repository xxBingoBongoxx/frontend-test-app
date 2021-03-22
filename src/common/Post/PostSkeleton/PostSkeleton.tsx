import React from 'react';
import './PostSkeleton.scss';

const PostSkeleton: React.FC = () => {
  return (
    <div className="post__skeleton-item">
      <div className="post__skeleton-name" />
      <div className="post__skeleton-title" />
      <div className="post__skeleton-content" />
      <div className="post__skeleton-content" />
      <div className="post__skeleton-content" />
    </div>
  );
};

export default PostSkeleton;
