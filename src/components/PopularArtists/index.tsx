import cn from 'classnames';
import styles from './PopularArtists.module.scss';
import popularArtists from 'config/popularArtists.json';

const PopularArtists = () => {
  console.log(popularArtists);

  return (
    <div className={styles.popularArtists}>
      <div className={styles.header}>
        <h2 className={cn('heading-2', styles['heading2'])}>Popular Artists</h2>

        <button className='seeAll-btn'>See all</button>
      </div>

      <div className={styles.artistsList}>
        {popularArtists.map((artist) => (
          <div className={styles.artist} key={artist.id}>
            <img src={artist.image} alt={`${artist.name} artist`} className={styles.image} />

            <span className={styles.name}>{artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
