import React from 'react';
import styles from './Modal.module.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/Right.svg';
import { ReactComponent as LeftIcon } from '../../assets/icons/Left.svg';
import { ReactComponent as LinkIcon } from '../../assets/icons/Link.svg';
import { Photo } from '../../generated/graphql';

type ModalProps = {
  data: Photo[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ data, setOpen }) => {
  const [index, setIndex] = React.useState<number>(0);

  const increment = React.useCallback(() => {
    if (index === data.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((prevState) => prevState + 1);
  }, [index, setIndex, data.length]);

  const decrement = React.useCallback(() => {
    if (index === 0) {
      setIndex(data.length - 1);
      return;
    }
    setIndex((prevState) => prevState - 1);
  }, [index, setIndex, data.length]);

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
      switch (code) {
        case 'ArrowLeft':
          decrement();
          break;
        case 'ArrowRight':
          increment();
          break;
        case 'Escape':
          handleClose();
          break;
      }
    },
    [increment, decrement, handleClose],
  );

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleUserKeyPress);
    return () => window.removeEventListener('keydown', handleUserKeyPress);
  }, [handleUserKeyPress]);

  return (
    <div className={styles.modal__wrapper}>
      <LeftIcon className={styles.modal__iconLeft} onClick={decrement} />
      <RightIcon className={styles.modal__iconRight} onClick={increment} />
      <LinkIcon className={styles.modal__iconLink} />
      <div className={styles.modal__content}>
        <img className={styles.modal__photo} src={data[index].thumbnailUrl || ''} alt="photo" />
      </div>
      <div className={styles.modal__title}>{data[index].title}</div>
      <CloseIcon className={styles.modal__iconClose} onClick={handleClose} />
    </div>
  );
};

export default Modal;
