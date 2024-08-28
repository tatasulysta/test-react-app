import React from 'react';
import { NoteModel } from '../../api/notes';
import styles from './styles.module.css';

export default function NoteComponent(props: NoteModel) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.body}>{props.body}</p>
      <p className={styles.timeStamp}>{props.createdAt}</p>
    </div>
  );
}
