import React from 'react';
import { NoteModel } from '../../api/notes';
import styles from './styles.module.css';
import Button from '../button';

interface Props extends NoteModel {
  onArchiveAction: (id: string, action: 'unarchive' | 'archive') => void;
}

export default function NoteComponent(props: Props) {
  const { archived, title, body, createdAt, id, onArchiveAction } = props;

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
      <p className={styles.timeStamp}>{createdAt}</p>
      <Button
        variant="secondary"
        onClick={() => onArchiveAction(id, archived ? 'unarchive' : 'archive')}
      >
        {!archived ? 'Archived' : 'Unarchived'}
      </Button>
    </div>
  );
}
