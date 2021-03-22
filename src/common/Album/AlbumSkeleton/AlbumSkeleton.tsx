import React from 'react';
import './AlbumSkeleton.scss';

const AlbumSkeleton: React.FC = () => {
  return (
    <div className="skeleton-item">
      <div>
        <div className="skeleton-logo" />
      </div>
      <div className="skeleton-info">
        <p className="skeleton-title" />
        <p className="skeleton-text" />
      </div>
    </div>
  );
};

export default AlbumSkeleton;
