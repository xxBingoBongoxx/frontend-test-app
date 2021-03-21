import React from 'react';
import Header from '../../common/Header/Header';
import { Tabs, Tab, TabPanel } from '../../common/TabMenu/TabMenu';
import Album from '../../common/Album/Album';
import AlbumSkeleton from '../../common/Album/Skeleton/AlbumSkeleton';
import AlbumCreate from '../../common/Album/AlbumCreate/AlbumCreate';
import styles from './Feed.module.scss';
import { ReactComponent as AcuraAvatar } from '../../assets/icons/acuraAvatar.svg';

type Props = unknown;

const Feed: React.FC<Props> = () => {
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const handleClickTabItem = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>Feed</div>
        <Tabs onClick={handleClickTabItem}>
          <Tab label="Albums" count={3} disabled={false} />
          <Tab label="Posts" count={1} disabled={disabled} />
        </Tabs>
        <TabPanel index={0}>
          <AlbumCreate />
          <Album logo={<AcuraAvatar />} name="Ivan Ivanov" title="Acura Summer 2018" />
          <AlbumSkeleton />
          <Album logo={<AcuraAvatar />} name="Ivan Ivanov" title="Acura Summer 2018" />
        </TabPanel>
      </div>
    </>
  );
};

export default Feed;
