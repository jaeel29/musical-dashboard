import styles from './TopPodcasts.module.scss';
import topPodcasts from 'config/TopPodcasts.json';
import Icon from 'components/UI/Icon';

const TopPodcasts = () => {
  return (
    <div className={styles.topPodcasts}>
      <div className={styles.header}>
        <h2 className={'heading-2'}>Top Podcasts</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.podcastsList}>
          {topPodcasts.map((podcast) => (
            <div className={styles.podcast} key={podcast.id}>
              <div className={styles.imageContainer} style={{ backgroundColor: podcast.color }}>
                <img src={podcast.image} alt={podcast.name} className={styles.image} />

                <div className={styles.iconPlay}>
                  <Icon name='play' fillPath='#020102' size={30} />
                </div>
              </div>

              <span className={styles.name}>{podcast.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPodcasts;
