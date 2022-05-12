import AudioNextIcon from 'assets/icons/AudioNextIcon';
import AudioPrevIcon from 'assets/icons/AudioPrevIcon';
import PauseIcon from 'assets/icons/PauseIcon';
import HistogramAudio from 'assets/icons/HistogramAudio';
import Avatar from 'components/UI/Avatar';
import styles from './BottomBar.module.scss';
import VolumeIcon from 'assets/icons/VoumeIcon';

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.highlitedMusic}>
        <Avatar src={'/images/avatar.png'} highlight />
        <div className={styles.titles}>
          <h6>Let's kill this love</h6>
          <p>Blackpink</p>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.player}>
          <AudioPrevIcon />

          <div className={styles.pause}>
            <PauseIcon />
          </div>

          <AudioNextIcon />
        </div>

        <div className={styles.playerHistogram}>
          <span className={styles.start}>3:40</span>

          <div className={styles.histogram}>
            <HistogramAudio />
          </div>

          <span className={styles.end}>4:58</span>
        </div>
      </div>

      <div className={styles.volumeContainer}>
        <div className={styles.volume}>
          <VolumeIcon />

          <div className={styles.sliderVolume}>
            <div className={styles.active}>
              <div className={styles.thumb} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
