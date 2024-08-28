import React from 'react';
import Input from '../../components/input';
import styles from './styles.module.css';
import Button from '../../components/button';
import { queryFetch, setLoginToken } from '../../api/common';
import { LoginInput, LoginModel, useLogin } from '../../api/auth';

const DEFAULT_VALUES: LoginInput = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [state, setState] = React.useState<LoginInput>(DEFAULT_VALUES);
  const onSubmit = async () => {
    try {
      const res = await useLogin(state);
      setLoginToken(res.data.accessToken);
      alert(res.message);
    } catch (e) {
      alert('error login, please re-check');
      console.error('Error login');
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
          <p className={styles.title}>Login</p>
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
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
}
