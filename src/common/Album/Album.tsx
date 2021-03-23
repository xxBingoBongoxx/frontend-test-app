import React from 'react';
import styles from './Album.module.scss';
import { Photo, Scalars } from '../../generated/graphql';
import { ReactComponent as More } from '../../assets/icons/More.svg';
import { Modal } from '../Modal';

type AlbumProps = {
  id: Scalars['ID'];
  name: string;
  title: string;
  logo: string;
  data: Photo[];
  deleteAlbum: (albumId: Scalars['ID']) => void;
};

const Album: React.FC<AlbumProps> = ({ id, name, title, logo, data, deleteAlbum }) => {
  const [showMore, setMore] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setMore(!showMore);
  };

  const handleDelete = () => {
    deleteAlbum(id);
  };

  const openModal = () => {
    setOpen(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = '';
    document.body.style.top = '';
  };

  return (
    <div className={styles.album__container}>
      <img className={styles.album__logo} src={logo} alt="logo" onClick={openModal} />
      <div className={styles.album__textInfo}>
        <div className={styles.album__title}>{name}</div>
        <div className={styles.album__text}>{title}</div>
      </div>
      {showMore ? (
        <div className={styles.album__more} onClick={handleClick}>
          <More />
          <div className={styles.dropdownContent} onClick={handleDelete}>
            <div>Delete</div>
          </div>
        </div>
      ) : (
        <div className={styles.album__more} onClick={handleClick}>
          <More />
        </div>
      )}
      {open && <Modal data={data} setOpen={setOpen} />}
    </div>
  );
};

export default Album;
