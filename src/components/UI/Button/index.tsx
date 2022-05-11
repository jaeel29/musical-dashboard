import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './Button.module.scss';

const Button = ({ children, outline }: { children: ReactNode; outline?: boolean }) => {
  return <button className={cn(styles.button, { [styles.outline]: outline })}>{children}</button>;
};

export default Button;
