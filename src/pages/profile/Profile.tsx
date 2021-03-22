import React from 'react';
import Header from '../../common/Header';
import styles from './Profile.module.scss';

type Props = unknown;

const Profile: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>Profile page</div>
    </>
  );
};

export default Profile;
