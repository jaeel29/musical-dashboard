import BottomBar from 'components/BottomBar';
import PopularArtists from 'components/PopularArtists';
import TopPodcasts from 'components/Top Podcasts';
import TopCategories from 'components/TopCategories';
import Trending from 'components/Trending';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <main className={styles.body}>
        <div className={styles.left}>
          <Trending />
          <PopularArtists />
        </div>

        <div className={styles.right}>
          <TopCategories />
          <TopPodcasts />
        </div>
      </main>

      <BottomBar />
    </div>
  );
};

export default Home;
