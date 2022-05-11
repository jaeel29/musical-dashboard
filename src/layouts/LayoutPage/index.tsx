import BottomBar from 'layouts/BottomBar';
import Sidebar from 'layouts/Sidebar';
import { FC, ReactNode } from 'react';
import styles from './LayoutPage.module.scss';

const LayoutPage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.inner}>
        <div className={styles.container}>{children}</div>
      </div>

      <BottomBar />
    </div>
  );
};

export default LayoutPage;
