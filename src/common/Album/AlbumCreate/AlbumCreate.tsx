import React from 'react';
import styles from './AlbumCreate.module.scss';
import { ReactComponent as Union } from '../../../assets/icons/Union.svg';

const AlbumCreate: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Union />
        <div>Add album</div>
      </div>
    </div>
  );
};

export default AlbumCreate;
