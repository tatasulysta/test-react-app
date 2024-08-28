import React from 'react';
import useFetch from '../../hooks/use-fetch';
import { GetNoteParams, NoteModel, useGetNotes } from '../../api/notes';
import NoteComponent from '../../components/note-component';
import Button from '../../components/button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';

export default function MainPage() {
  const [archived, setArchived] = React.useState<boolean>(true);
  const { res, loading } = useFetch<NoteModel[]>({
    useGet: useGetNotes({ archived }),
  });

  const navigate = useNavigate();

  return (
    <div className={styles.item_container}>
      <Button variant="secondary" onClick={() => setArchived((prev) => !prev)}>
        See {archived ? 'Archived' : 'UnArchived'} Note
      </Button>

      <div className={styles.add_button}>
        <Button onClick={() => navigate('/create')}>Add New Note</Button>
      </div>

      {res?.data?.map((item) => (
        <NoteComponent key={item.id + archived} {...item} />
      ))}
    </div>
  );
}
