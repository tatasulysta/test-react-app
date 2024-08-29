import React from 'react';
import useFetch from '../../hooks/use-fetch';
import { NoteModel, useGetArchivedNotes, useGetNotes } from '../../api/notes';
import NoteComponent from '../../components/note-component';
import Button from '../../components/button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import Tab from '../../components/tab';

export default function MainPage() {
  const { res, loading } = useFetch<NoteModel[]>({
    useGet: useGetNotes(),
  });
  const { res: archivedRes, loading: loadArchived } = useFetch<NoteModel[]>({
    useGet: useGetArchivedNotes(),
  });

  const navigate = useNavigate();

  return (
    <div className={styles.item_container}>
      {loading || loadArchived ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.add_button}>
            <Button onClick={() => navigate('/create')}>Add New Note</Button>
          </div>
          <Tab
            defaultValue="Unarchived"
            items={[
              {
                content: (
                  <div className={styles.content_container}>
                    {res?.data.length ? (
                      (res?.data || []).map((item) => (
                        <NoteComponent key={item.id} {...item} />
                      ))
                    ) : (
                      <p>No Data Here</p>
                    )}
                  </div>
                ),
                label: 'Unarchived',
              },
              {
                content: (
                  <div className={styles.content_container}>
                    {archivedRes?.data?.length ? (
                      (archivedRes?.data || []).map((item) => (
                        <NoteComponent key={item.id} {...item} />
                      ))
                    ) : (
                      <p>No Data Here</p>
                    )}
                  </div>
                ) || <></>,
                label: 'Archived',
              },
            ]}
          />
        </>
      )}
    </div>
  );
}
