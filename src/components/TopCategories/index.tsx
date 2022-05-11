import styles from './TopCategories.module.scss';

const TopCategories = () => {
  return (
    <div className={styles.topCategories}>
      <div className={styles.header}>
        <h2 className={'heading-2'}>Top Categories</h2>
      </div>

      <div className={styles.body}></div>
    </div>
  );
};

export default TopCategories;
