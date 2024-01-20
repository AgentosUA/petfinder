'use client';

import { useState, type FC } from 'react';

import classNames from 'classnames';

import styles from './ui.module.scss';

type InputProps = React.ComponentProps<'input'> & {
  label?: string;
};

const Input: FC<InputProps> = ({label, value, ...props}) => {
  const [focused, setFocused] = useState(false);

  return (
  <div className={classNames(styles.wrapper, props.className)}>
    <label className={classNames(styles.label, {
      [styles.labelFocused]: focused || value,
    })}>{label}</label>
    <input className={classNames(styles.input, props.className)} value={value} {...props} onFocus={(e) => {
      setFocused(true)
      props?.onFocus?.(e);
    }}
    onBlur={(e) => {
      props?.onBlur?.(e);
      setFocused(false)
    }} />
  </div>
)};

export { Input };