import styles from './Avatar.module.scss';

const Avatar = ({ src, highlight, dot }: any) => {
  return (
    <div className={styles.avatar}>
      <div className={styles.avatarContainer}>
        <div className={styles.imageContainer}>
          <img src={src} alt='avatar' className={styles.image} />
        </div>

        {dot && <div className={styles.dot} />}

        {highlight && <div className={styles.highlight} />}
      </div>
    </div>
  );
};

export default Avatar;
