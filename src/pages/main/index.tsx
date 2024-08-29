import React from 'react';
import useFetch from '../../hooks/use-fetch';
import {
  NoteModel,
  useArchiveNote,
  useGetArchivedNotes,
  useGetNotes,
  useUnArchiveNote,
} from '../../api/notes';
import NoteComponent from '../../components/note-component';
import Button from '../../components/button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import Tab from '../../components/tab';

export default function MainPage() {
  const { res, loading, refetch } = useFetch<NoteModel[]>({
    useGet: useGetNotes(),
  });
  const {
    res: archivedRes,
    loading: loadArchived,
    refetch: reArchive,
  } = useFetch<NoteModel[]>({
    useGet: useGetArchivedNotes(),
  });

  const navigate = useNavigate();

  const onArchived = async (id: string, action: 'archive' | 'unarchive') => {
    try {
      const res =
        action === 'archive'
          ? await useArchiveNote(id)
          : await useUnArchiveNote(id);

      refetch();
      reArchive();
      alert(res.message);
    } catch (e) {
      console.error(e);
    }
  };

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
                        <NoteComponent
                          key={item.id}
                          {...item}
                          onArchiveAction={onArchived}
                        />
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
                        <NoteComponent
                          key={item.id}
                          {...item}
                          onArchiveAction={onArchived}
                        />
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
