import React from 'react';
import Input from '../../components/input';
import styles from './styles.module.css';
import Button from '../../components/button';
import { setLoginToken } from '../../api/common';
import { LoginInput, useLogin } from '../../api/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const DEFAULT_VALUES: LoginInput = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const [state, setState] = React.useState<LoginInput>(DEFAULT_VALUES);
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const res = await useLogin(state);

      await setLoginToken(res.data.accessToken);
      navigate('/');
    } catch (e) {
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
          <p>
            Dont have account register <Link to="/sign-up">here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
