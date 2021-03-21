import React from 'react';
import Header from '../../common/Header/Header';
import styles from './Feed.module.scss';

type Props = unknown;

const Feed: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>Feed page</div>
    </>
  );
};

export default Feed;
