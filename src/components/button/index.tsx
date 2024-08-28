import React from 'react';
import styles from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // leftIcon?: (size: number) => React.ReactNode;
  // rightIcon?: (size: number) => React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'small';
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'medium', className, ...rest } = props;

  return (
    <button
      {...rest}
      className={`${styles[variant]} ${styles[size]} ${styles.main} ${className}`}
    />
  );
}
