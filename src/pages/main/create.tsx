import React from 'react';
import { NoteInput, useCreateNote } from '../../api/notes';
import { useNavigate } from 'react-router';
import CenterContainer from '../../components/center-container';
import Input from '../../components/input';
import Button from '../../components/button';

import styles from './styles.module.css';

const DEFAULT_VALUES: NoteInput = {
  body: '',
  title: '',
};

export default function MainCreate() {
  const [state, setState] = React.useState<NoteInput>(DEFAULT_VALUES);
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await useCreateNote(state);
      navigate('/');
    } catch (e) {
      console.error('Error ');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <CenterContainer>
        <p style={{ fontSize: 20 }}>Create Note</p>
        <Input
          type="text"
          label="Title"
          name="title"
          value={state.title}
          onChange={(e) =>
            setState((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Input
          type="text"
          label="Body"
          name="body"
          onChange={(e) =>
            setState((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <div className={styles.form_footer}>
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </CenterContainer>
    </form>
  );
}
