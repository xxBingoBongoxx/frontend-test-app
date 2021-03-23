import React from 'react';
import styles from './ModalDelete.module.scss';
import { ReactComponent as Close } from '../../../assets/icons/Close.svg';
import { ReactComponent as Delete } from '../../../assets/icons/Delete.svg';

type ModalDeleteProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
};

const ModalDelete: React.FC<ModalDeleteProps> = ({ setOpen, handleDelete }) => {
  const handleClose = React.useCallback(() => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.body.style.overflow = 'scroll';
    setOpen(false);
  }, [setOpen]);

  const handleUserKeyPress = React.useCallback(
    (event: KeyboardEvent) => {
      const { code } = event;
      if (code === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleUserKeyPress);
    return () => window.removeEventListener('keydown', handleUserKeyPress);
  }, [handleUserKeyPress]);

  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>
        <div className={styles.modal__deleteIcon}>
          <Delete />
        </div>
        <div className={styles.modal__title}>Delete album</div>
        <div className={styles.modal__subtitle}>Album will be permanently lost</div>
        <button className={styles.modal__button} onClick={handleDelete}>
          Delete
        </button>
      </div>
      <Close className={styles.modal__iconClose} onClick={handleClose} />
    </div>
  );
};

export default ModalDelete;
