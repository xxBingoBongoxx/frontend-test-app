import React from 'react';
import styles from './Post.module.scss';

type PostProps = {
  name: string;
  title: string;
  content: string;
};

const Post: React.FC<PostProps> = ({ name, title, content }) => {
  return (
    <div className={styles.post__container}>
      <div className={styles.post__name}>{name}</div>
      <div className={styles.post__title}>{title}</div>
      <div className={styles.post__content}>{content}</div>
    </div>
  );
};

export default Post;
