import cn from 'classnames';
import styles from './PopularArtists.module.scss';

const PopularArtists = () => {
  return (
    <div className={styles.popularArtists}>
      <div className={styles.header}>
        <h2 className={cn('heading-2', styles['heading-2'])}>Popular Artists</h2>
      </div>
    </div>
  );
};

export default PopularArtists;
