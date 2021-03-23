import React, { FormEvent } from 'react';
import styles from './ModalAdd.module.scss';
import { ReactComponent as Close } from '../../../assets/icons/Close.svg';

type ModalAddProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAdd: React.FC<ModalAddProps> = ({ setOpen }) => {
  const handleClose = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.body.style.overflow = 'scroll';
    setOpen(false);
  };

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>
        <div className={styles.modal__title}>Add album</div>
        <form className={styles.modal__form} onSubmit={handleSubmit}>
          <label>
            Title
            <input type="text" name="title" />
          </label>
          <label>
            Description
            <input type="text" name="description" />
          </label>
          <button className={styles.modal__button} type="submit">
            Send
          </button>
        </form>
      </div>
      <Close className={styles.modal__iconClose} onClick={handleClose} />
    </div>
  );
};

export default ModalAdd;
