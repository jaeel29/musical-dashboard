import Sidebar from 'components/Sidebar';
import { FC, ReactNode } from 'react';
import styles from './LayoutPage.module.scss';

const LayoutPage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default LayoutPage;
