import React from 'react';
import Header from '../../common/Header';
import { TabNav, TabPanel } from '../../common/TabMenu';
import { Album, AlbumSkeleton, AlbumCreate } from '../../common/Album';
import { Post, PostSkeleton } from '../../common/Post';
import styles from './Feed.module.scss';
import { ReactComponent as AcuraAvatar } from '../../assets/icons/acuraAvatar.svg';
import { useGetAlbumsQuery } from '../../generated/graphql';

type Props = unknown;

const Feed: React.FC<Props> = () => {
  const [selected, setSelected] = React.useState<string>('Albums');

  const { data, loading, error } = useGetAlbumsQuery();

  const tabs = [
    { label: 'Albums', count: 3 },
    { label: 'Posts', count: 1 },
  ];

  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>Feed</div>
        <TabNav tabs={tabs} selected={selected} setSelected={setSelected} />
        <TabPanel isSelected={selected === tabs[0].label}>
          <AlbumCreate />
          <Album logo={<AcuraAvatar />} name="Ivan Ivanov" title="Acura Summer 2018" />
          <AlbumSkeleton />
          <Album logo={<AcuraAvatar />} name="Ivan Ivanov" title="Acura Summer 2018" />
        </TabPanel>
        <TabPanel isSelected={selected === tabs[1].label}>
          <Post
            name="Ivan Ivanov"
            title="Title"
            content="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi archit veritatis et quasi arc..."
          />
          <Post
            name="Ivan Ivanov"
            title="Title"
            content="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi archit veritatis et quasi arc..."
          />
          <Post
            name="Ivan Ivanov"
            title="Title"
            content="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi archit veritatis et quasi arc..."
          />
          <Post
            name="Ivan Ivanov"
            title="Title"
            content="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi archit veritatis et quasi arc..."
          />
          <Post
            name="Ivan Ivanov"
            title="Title"
            content="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi archit veritatis et quasi arc..."
          />
          <PostSkeleton />
        </TabPanel>
      </div>
    </>
  );
};

export default Feed;
