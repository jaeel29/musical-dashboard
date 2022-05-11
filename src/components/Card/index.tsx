import Waves from 'assets/icons/Waves';
import Button from 'components/UI/Button';
import Icon from 'components/UI/Icon';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.hero}>
          <span className={styles.tag}>#melonChart</span>
          <h1 className={styles.title}>Top Songs of this month</h1>
        </div>

        <div className={styles.actionButtons}>
          <Button>
            <Icon name='play' fillPath='white' />
            <span>Play</span>
          </Button>

          <Button outline>View Playlist</Button>
        </div>
      </div>

      <div className={styles.right}>
        <Waves />
      </div>
    </div>
  );
};

export default Card;
