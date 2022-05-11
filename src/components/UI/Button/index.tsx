import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

const Button = ({
  children,
  outline,
  fill,
  classname,
}: {
  children: ReactNode;
  outline?: boolean;
  fill?: boolean;
  classname?: boolean;
}) => {
  return (
    <button
      className={cn(styles.btn, classname, { [styles.outline]: outline }, { [styles.fill]: fill })}
    >
      {children}
    </button>
  );
};

export default Button;
