import styles from './Avatar.module.scss';

const Avatar = ({ src }: any) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.avatarContainer}>
        <div className={styles.imageContainer}>
          <img src={src} alt='avatar' className={styles.image} />
        </div>
        <div className={styles.dot} />
      </div>
    </div>
  );
};

export default Avatar;
