import cn from 'classnames';
import Card from 'components/Card';
import styles from './Trending.module.scss';

const Trending = () => {
  return (
    <div className={styles.trending}>
      <div className={styles.header}>
        <h2 className={cn('heading-2', styles.heading2)}>Trending</h2>

        <button className='seeAll-btn'>Arrows</button>
      </div>

      <Card />
    </div>
  );
};

export default Trending;
