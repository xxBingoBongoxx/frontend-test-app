import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as UserAvatar } from '../../assets/icons/Base/Fill/Components/Header/Avatars/Text/Small.svg';

type HeaderProps = unknown;

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
