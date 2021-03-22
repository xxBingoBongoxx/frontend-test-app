import React from 'react';
import styles from './Album.module.scss';
import { ReactComponent as More } from '../../assets/icons/More.svg';

type AlbumProps = {
  logo?: React.ReactNode;
  name: string;
  title: string;
};

const Album: React.FC<AlbumProps> = ({ logo, name, title }) => {
  const [showMore, setMore] = React.useState<boolean>(false);

  const handleClick = () => {
    setMore(!showMore);
  };

  return (
    <div className={styles.album__container}>
      <div className={styles.album__logo}>{logo ? logo : 'logo'}</div>
      <div className={styles.album__textInfo}>
        <div className={styles.album__title}>{name}</div>
        <div className={styles.album__text}>{title}</div>
      </div>
      {showMore ? (
        <div className={`${styles.album__more} ${styles.dropdownContent}`} onClick={handleClick}>
          <More />
          <div>Delete</div>
        </div>
      ) : (
        <div className={styles.album__more} onClick={handleClick}>
          <More />
        </div>
      )}
    </div>
  );
};

export default Album;
