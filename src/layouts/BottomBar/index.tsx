import Avatar from 'components/UI/Avatar';
import styles from './BottomBar.module.scss';

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.highlitedMusic}>
        <Avatar src={'/images/avatar.png'} highlight />
        <div className={styles.titles}>
          <h6>Let's kill this love</h6>
          <p>Blackpink</p>
        </div>
      </div>

      <div className={styles.player}></div>
      <div className={styles.playerHistogram}></div>
      <div className={styles.volume}></div>
    </div>
  );
};

export default BottomBar;
