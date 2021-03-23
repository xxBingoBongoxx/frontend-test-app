import React from 'react';
import styles from './Album.module.scss';
import { Photo, Scalars } from '../../generated/graphql';
import { ReactComponent as More } from '../../assets/icons/More.svg';
import { Modal, ModalDelete } from '../Modal';

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
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = React.useState<boolean>(false);

  const handleClick = () => {
    setMore(!showMore);
  };

  const handleDelete = () => {
    deleteAlbum(id);
  };

  const memorizeScrollPosition = () => {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = '';
    document.body.style.top = '';
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    memorizeScrollPosition();
  };

  const handleOpenModalDelete = () => {
    setOpenModalDelete(true);
    memorizeScrollPosition();
  };

  return (
    <div className={styles.album__container}>
      <img className={styles.album__logo} src={logo} alt="logo" onClick={handleOpenModal} />
      <div className={styles.album__textInfo}>
        <div className={styles.album__title}>{name}</div>
        <div className={styles.album__text}>{title}</div>
      </div>
      {showMore ? (
        <div className={styles.album__more} onClick={handleClick}>
          <More />
          <div className={styles.dropdownContent}>
            <div onClick={handleOpenModalDelete}>Delete</div>
          </div>
        </div>
      ) : (
        <div className={styles.album__more} onClick={handleClick}>
          <More />
        </div>
      )}
      {openModal && <Modal data={data} setOpen={setOpenModal} />}
      {openModalDelete && <ModalDelete handleDelete={handleDelete} setOpen={setOpenModalDelete} />}
    </div>
  );
};

export default Album;
