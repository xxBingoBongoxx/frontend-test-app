import React from 'react';
import styles from './Header.module.scss';
import { useHistory } from 'react-router-dom';
import { ReactComponent as UserAvatar } from '../../assets/icons/Base/Fill/Components/Header/Avatars/Text/Small.svg';
import { feedUrl, faqUrl, userUrl } from '../../constants/urls';

type HeaderProps = unknown;

const Header: React.FC<HeaderProps> = () => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        <UserAvatar />
        <div className={styles.dropdownContent}>
          <div onClick={() => history.push(feedUrl)}>Feed page</div>
          <div onClick={() => history.push(faqUrl)}>FAQ page</div>
          <div onClick={() => history.push(userUrl)}>User page</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
