import React from 'react';
import './AlbumSkeleton.scss';

const AlbumSkeleton: React.FC = () => {
  return (
    <div className="album__skeleton-item">
      <div>
        <div className="album__skeleton-logo" />
      </div>
      <div className="album__skeleton-info">
        <p className="album__skeleton-title" />
        <p className="album__skeleton-text" />
      </div>
    </div>
  );
};

export default AlbumSkeleton;
