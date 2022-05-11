import PopularArtists from 'components/PopularArtists';
import TopPodcasts from 'components/Top Podcasts';
import TopCategories from 'components/TopCategories';
import Trending from 'components/Trending';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.left}>
        <Trending />
        <PopularArtists />
      </div>

      <div className={styles.right}>
        <TopCategories />
        <TopPodcasts />
      </div>
    </main>
  );
};

export default Home;
