import React from 'react';
import styles from './AlbumAdd.module.scss';
import { ReactComponent as Union } from '../../../assets/icons/Union.svg';
import { ModalAdd } from '../../Modal';
import { Album } from '../../../generated/graphql';

type AlbumAddProps = {
  addNewAlbum: (album: Album) => void;
};

const AlbumAdd: React.FC<AlbumAddProps> = ({ addNewAlbum }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = '';
    document.body.style.top = '';
  };

  return (
    <>
      <div className={styles.container} onClick={openModal}>
        <div className={styles.info}>
          <Union />
          <div>Add album</div>
        </div>
      </div>
      {open && <ModalAdd setOpen={setOpen} addNewAlbum={addNewAlbum} />}
    </>
  );
};

export default AlbumAdd;
