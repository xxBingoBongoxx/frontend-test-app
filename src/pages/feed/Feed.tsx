import React from 'react';
import Header from '../../common/Header';
import { TabNav, TabPanel } from '../../common/TabMenu';
import { Album, AlbumSkeleton, AlbumAdd } from '../../common/Album';
import { Album as AlbumType, Scalars } from '../../generated/graphql';
import { Post, PostSkeleton } from '../../common/Post';
import { Photo, useGetAlbumsQuery } from '../../generated/graphql';
import styles from './Feed.module.scss';

type Props = unknown;

type AlbumWrapperProps = {
  setAlbumsTotal: React.Dispatch<React.SetStateAction<number>>;
};

const AlbumWrapper: React.FC<AlbumWrapperProps> = ({ setAlbumsTotal }) => {
  const [arrayOfAlbums, setArrayOfAlbums] = React.useState<AlbumType[]>([]);

  const { data, loading, error, fetchMore } = useGetAlbumsQuery({
    variables: {
      page: 1,
      limit: 20,
    },
    onCompleted: () => {
      if (data && data.albums && data.albums.data) {
        setAlbumsTotal(data.albums.data.length);
        setArrayOfAlbums(data.albums.data as AlbumType[]);
      }
    },
  });

  React.useEffect(() => {
    setAlbumsTotal(arrayOfAlbums.length);
  }, [arrayOfAlbums, setAlbumsTotal]);

  const addNewAlbum = (album: AlbumType) => {
    setArrayOfAlbums((prevState) => [album, ...prevState]);
  };

  const deleteAlbum = (albumId: Scalars['ID']) => {
    setArrayOfAlbums(arrayOfAlbums.filter((album) => album.id !== albumId));
  };

  if (loading) {
    return (
      <>
        <AlbumAdd addNewAlbum={addNewAlbum} />
        <AlbumSkeleton />
        <AlbumSkeleton />
      </>
    );
  }

  if (data && data.albums && data.albums.data) {
    return (
      <>
        <AlbumAdd addNewAlbum={addNewAlbum} />
        {arrayOfAlbums.map((album) => {
          if (
            album &&
            album.id &&
            album.title &&
            album.user?.name &&
            album.photos &&
            album.photos.data &&
            album.photos.data[0] &&
            album.photos.data[0].thumbnailUrl
          ) {
            const { title } = album;
            const { name } = album.user;
            const { thumbnailUrl } = album.photos.data[0];

            return (
              <Album
                key={`${album.id} ${album.title}`}
                id={album.id}
                name={name}
                title={title}
                logo={thumbnailUrl}
                data={album.photos.data as Photo[]}
                deleteAlbum={deleteAlbum}
              />
            );
          }

          return null;
        })}
      </>
    );
  }

  if (error) {
    return <div>Could not load data</div>;
  }

  return null;
};

const Feed: React.FC<Props> = () => {
  const [selected, setSelected] = React.useState<string>('Albums');
  const [albumsTotal, setAlbumsTotal] = React.useState<number>(0);

  const tabs = [
    { label: 'Albums', count: albumsTotal },
    { label: 'Posts', count: 1 },
  ];

  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>Feed</div>
        <TabNav tabs={tabs} selected={selected} setSelected={setSelected} />
        <TabPanel isSelected={selected === tabs[0].label}>
          <AlbumWrapper setAlbumsTotal={setAlbumsTotal} />
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
