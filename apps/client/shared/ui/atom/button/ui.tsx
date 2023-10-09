import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
};

import styles from './ui.module.scss';
import classNames from 'classnames';

const Button: FC<ButtonProps> = ({ children, size = 'md', variant = 'secondary', className, ...props }) => {
  return (
    <button className={classNames(styles.button, styles[size], styles[variant], {
      [className!]: Boolean(className),
    })} {...props}>
      {children}
    </button>
  );
};

export { Button };
