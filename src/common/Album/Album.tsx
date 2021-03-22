import React from 'react';
import styles from './Album.module.scss';
import { ReactComponent as More } from '../../assets/icons/More.svg';
import { Photo } from '../../generated/graphql';

type AlbumProps = {
  name: string;
  title: string;
  logo: string;
  data: Photo[];
};

const Album: React.FC<AlbumProps> = ({ name, title, logo, data }) => {
  const [showMore, setMore] = React.useState<boolean>(false);

  const handleClick = () => {
    setMore(!showMore);
  };

  return (
    <div className={styles.album__container}>
      <img className={styles.album__logo} src={logo} alt="logo" />
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
