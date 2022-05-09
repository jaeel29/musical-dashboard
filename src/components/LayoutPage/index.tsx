import cn from 'classnames';
import Sidebar from 'components/Sidebar';
import React, { FC, ReactNode } from 'react';
import styles from './LayoutPage.module.scss';

const LayoutPage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={cn(styles.layout)}>
      <Sidebar />

      <div className={cn(styles.body)}>{children}</div>
    </div>
  );
};

export default LayoutPage;
