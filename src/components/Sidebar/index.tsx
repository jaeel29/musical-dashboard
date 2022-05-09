import React from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={cn(styles.sidebar)}>
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;
