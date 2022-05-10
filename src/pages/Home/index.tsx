import BottomBar from 'components/BottomBar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <h1>Home Page</h1>
      </div>

      <BottomBar />
    </div>
  );
};

export default Home;
