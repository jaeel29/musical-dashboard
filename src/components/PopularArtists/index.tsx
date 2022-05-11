import cn from 'classnames';
import styles from './PopularArtists.module.scss';
import PopularArtistsJson from 'config/PopularArtists.json';

const PopularArtists = () => {
  return (
    <div className={styles.popularArtists}>
      <div className={styles.header}>
        <h2 className={cn('heading-2', styles['heading2'])}>Popular Artists</h2>

        <button className='seeAll-btn'>See all</button>
      </div>

      <div className={styles.artistsList}>
        {PopularArtistsJson.map((artist, index) => (
          <div className={styles.artist}>
            <img src={artist.image} alt={`${artist.name} artist`} className={styles.image} />

            <span className={styles.name}>{artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
