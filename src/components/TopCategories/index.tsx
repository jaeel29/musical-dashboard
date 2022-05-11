import styles from './TopCategories.module.scss';
import topCategories from 'config/TopCategories.json';
import Icon from 'components/UI/Icon';
import cn from 'classnames';

const TopCategories = () => {
  return (
    <div className={styles.topCategories}>
      <div className={styles.header}>
        <h2 className={cn('heading-2', styles['heading2'])}>Top Categories</h2>

        <button className='seeAll-btn'>See all</button>
      </div>

      <div className={styles.body}>
        <div className={styles.categories}>
          {topCategories.map((category) => (
            <div className={styles.category} key={category.id}>
              <div className={styles.imageContainer} style={{ backgroundColor: category.color }}>
                <img src={category.image} alt={category.name} className={styles.image} />

                <div className={styles.iconPlay}>
                  <Icon name='play' fillPath='#020102' size={30} />
                </div>
              </div>

              <span className={styles.name}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
