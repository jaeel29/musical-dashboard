import styles from './TopCategories.module.scss';
import topCategories from 'config/TopCategories.json';

const TopCategories = () => {
  return (
    <div className={styles.topCategories}>
      <div className={styles.header}>
        <h2 className={'heading-2'}>Top Categories</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.categories}>
          {topCategories.map((category, index) => (
            <div key={Math.random()} className={styles.category}>
              <div className={styles.imageContainer} style={{ backgroundColor: category.color }}>
                <img src={category.image} alt={category.name} className={styles.image} />
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
