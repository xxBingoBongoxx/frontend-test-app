import React, { FormEvent } from 'react';
import { Album, Photo, useCreateAlbumMutation } from '../../../generated/graphql';
import styles from './ModalAdd.module.scss';
import { ReactComponent as Close } from '../../../assets/icons/Close.svg';

type ModalAddProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addNewAlbum: (album: Album) => void;
};

const ModalAdd: React.FC<ModalAddProps> = ({ setOpen, addNewAlbum }) => {
  const [createAlbum] = useCreateAlbumMutation();
  const [title, setTitle] = React.useState<string>('');

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createAlbum({
        variables: {
          title,
        },
      });
      if (response && response.data && response.data.createAlbum && response.data.createAlbum.user) {
        const newAlbum = {
          id: response.data.createAlbum.id,
          title: title,
          photos: {
            data: [
              {
                title: 'Hello world',
                thumbnailUrl: 'https://www.meme-arsenal.com/memes/c8752028f29368a56ada9f612d8b77f5.jpg',
              },
            ] as Photo[],
          },
          user: {
            name: response.data.createAlbum.user.name,
          },
        } as Album;
        addNewAlbum(newAlbum);
        handleClose();
      }
    } catch (err) {
      const errMessage = err.message.toString();
      console.error(errMessage);
    }
  };

  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>
        <div className={styles.modal__title}>Add album</div>
        <form className={styles.modal__form} onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
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
