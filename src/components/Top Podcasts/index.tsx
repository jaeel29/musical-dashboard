import styles from './TopPodcasts.module.scss';

const TopPodcasts = () => {
  return (
    <div className={styles.topPodcasts}>
      <div className={styles.header}>
        <h2 className={'heading-2'}>Top Podcasts</h2>
      </div>

      <div className={styles.body}></div>
    </div>
  );
};

export default TopPodcasts;
