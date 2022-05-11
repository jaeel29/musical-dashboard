import styles from './TopPodcasts.module.scss';
import topPodcasts from 'config/TopPodcasts.json';
import Icon from 'components/UI/Icon';
import cn from 'classnames';

const TopPodcasts = () => {
  return (
    <div className={styles.topPodcasts}>
      <div className={styles.header}>
        <h2 className={cn('heading-2', styles['heading2'])}>Top Podcasts</h2>

        <button className='seeAll-btn'>See all</button>
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
