import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import useAuth from '../../hook/useAuth';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
    },
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '2rem',
    boxShadow: '.1rem .3rem 1.5rem .2rem #545454',
    display: 'flex',
    flexDirection: 'column',
    height: '35.2rem',
    justifyContent: 'space-around',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'calc(100vh - 40%)',
    width: '27.2rem',
  },
  bottom_card: {
    display: 'flex',
    fontSize: '1.3rem',
    justifyContent: 'space-around',
  },
}));

export default function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuth();

  async function onSubmit(data) {
    setLoading(true);
    setErr('');

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      })
      
      const userData = await response.json();
      setLoading(false);

      const userId = userData.usuario.id;
      

      if (!response.ok) {
        setErr(userData.erro);
        return;
      }
      
      setToken(userData.token);

      history.push(`/perfil/${userId}`)
    } catch (error) {
      setErr(error.message);
    }

    setLoading(false);
  }

  return (
    <form 
      className={classes.root} 
      noValidate 
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)} 
    >
      
      <div className={classes.card}>
          <h1>Login</h1>
          <TextField required 
              id="standard-required" 
              label="E-mail" 
              {...register('email')}
          />
          <TextField required
              id="standard-password-input"
              label="Senha"
              type="password"
              {...register('senha')}
          />
          {err && <Alert severity="error">{err}</Alert>}
          <Button variant="contained" color="primary" type="submit">
            Entrar
          </Button>
          {loading && <CircularProgress />}
          <div className={classes.bottom_card}>
            <span>Novo Usuário?</span> 
            <a href="/cadastro">CRIE UMA CONTA</a>
          </div>
      </div>
    </form>
  );
}
