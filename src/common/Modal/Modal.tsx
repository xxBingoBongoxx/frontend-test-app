import React from 'react';
import styles from './Modal.module.scss';
import { ReactComponent as Close } from '../../assets/icons/Close.svg';
import { ReactComponent as Right } from '../../assets/icons/Right.svg';
import { ReactComponent as Left } from '../../assets/icons/Left.svg';
import { ReactComponent as Link } from '../../assets/icons/Link.svg';
import { Photo } from '../../generated/graphql';

type ModalProps = {
  data: Photo[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ data, setOpen }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
  });

  const handleClose = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.body.style.overflow = 'scroll';
    setOpen(false);
  };

  const [index, setIndex] = React.useState<number>(0);

  const increment = () => {
    if (index === data.length - 1) {
      setIndex(0);
    }
    setIndex((prevState) => prevState + 1);
  };

  const decrement = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    }
    setIndex((prevState) => prevState - 1);
  };

  return (
    <div className={styles.modal__wrapper}>
      <Left className={styles.modal__iconLeft} onClick={decrement} />
      <Right className={styles.modal__iconRight} onClick={increment} />
      <Link className={styles.modal__iconLink} />
      <div className={styles.modal__content}>
        <img className={styles.modal__photo} src={data[index].thumbnailUrl || ''} alt="photo" />
      </div>
      <div className={styles.modal__title}>{data[index].title}</div>
      <Close className={styles.modal__iconClose} onClick={handleClose} />
    </div>
  );
};

export default Modal;
