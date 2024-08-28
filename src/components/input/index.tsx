import React from 'react';
import styles from './styles.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

export default function Input(props: Props) {
  const { label, name, ...rest } = props;

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input {...rest} id={name} className={styles.input}></input>
    </div>
  );
}
