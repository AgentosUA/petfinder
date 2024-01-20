import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  shadow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
};

import classNames from 'classnames';

import styles from './ui.module.scss';

const Button: FC<ButtonProps> = ({ children, size = 'md', variant = 'secondary', className, shadow = true, ...props }) => {
  return (
    <button className={classNames(styles.button, styles[size], styles[variant], {
      [styles.shadow]: shadow,
      [className!]: Boolean(className),
    })} {...props}>
      {children}
    </button>
  );
};

export { Button };
