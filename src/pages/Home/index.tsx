import BottomBar from 'components/BottomBar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <div className={styles.left}>Left</div>

        <div className={styles.right}>Right</div>
      </div>

      <BottomBar />
    </div>
  );
};

export default Home;
