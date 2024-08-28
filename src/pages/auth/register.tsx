import React from 'react';
import Input from '../../components/input';
import styles from './styles.module.css';
import Button from '../../components/button';

import { RegisterInput, useRegister } from '../../api/auth';
import { useNavigate } from 'react-router';

const DEFAULT_VALUES: RegisterInput = {
  email: '',
  name: '',
  password: '',
};

export default function RegisterPage() {
  const [state, setState] = React.useState<RegisterInput>(DEFAULT_VALUES);
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      await useRegister(state);

      navigate('/sign-in');
    } catch (e) {
      console.error('Error ');
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className={styles.container}>
          <p className={styles.title}>Register</p>
          <Input
            type="text"
            label="Name"
            name="name"
            value={state.name}
            onChange={(e) =>
              setState((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Input
            type="email"
            label="Email"
            name="email"
            value={state.email}
            onChange={(e) =>
              setState((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            type="password"
            label="Password"
            name="password"
            onChange={(e) =>
              setState((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <Button type="submit">Register</Button>
        </div>
      </form>
    </div>
  );
}
