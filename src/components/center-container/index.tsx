import React from 'react';
import styles from './styles.module.css';

export default function CenterContainer(props: React.PropsWithChildren) {
  return <div className={styles.container}>{props.children}</div>;
}
