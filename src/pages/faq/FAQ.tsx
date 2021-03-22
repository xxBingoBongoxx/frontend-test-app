import React from 'react';
import Header from '../../common/Header';
import styles from './FAQ.module.scss';

type Props = unknown;

const FAQ: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>FAQ page</div>
    </>
  );
};

export default FAQ;
