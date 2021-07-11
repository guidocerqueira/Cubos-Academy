import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styes.css';
import useAuth from '../../hook/useAuth';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: 200,
        justifyContent: 'space-between',
        marginRight: '3.2rem',
        marginTop: '-6.4rem',
        width: 320,
    },
    inputProduct: {
        display: 'flex',
        fontSize: '1rem',
        justifyContent: 'space-between',
    },
    inputPrice: {
        marginRight: '.5rem',
    },
    inputStorage: {
        marginLeft: '.5rem',
    },
    imageProduct: {
        borderRadius: '1.5rem',
        height: 260,
        marginLeft: '6.4rem',
        width: 250,
    },
    addButton: {
        fontSize: '1rem',
        maxWidth: 140,
    },
  }));

function EditUser() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const { token } = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    if (!token) history.push('/');
    
    let { id } = useParams();

    async function loadingProfile() {
        try {
            const response = await fetch(`http://localhost:8000/perfil/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            });

            const userData = await response.json();
            setData(userData[0]);  
            
        } catch (error) {
            console.log(error.message);
        }
    }

    async function onSubmit(dataProfile) {
        
        setLoading(true);
        setErr('');
    
        try {
          const response = await fetch(`http://localhost:8000/perfil/${id}`, {
            method: 'POST',
            body: JSON.stringify(dataProfile),
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
          
          const profileData = await response.json();
    
          console.log(profileData);
    
          history.push('/produtos')
        } catch (error) {
          setErr(error.message);
        }
        
        setLoading(false);
      }
    
    useEffect(() => {
        loadingProfile();
    }, []);
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return(
        <div className="product-form">
            <Sidebar />
            <div className="productContent">
                <h1>{data.nome_loja}</h1>
                <h2>Editar Perfil</h2>
                <div className="card-list">
                    <form 
                        className={classes.root} 
                        noValidate 
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField 
                            id="standard-basic" 
                            label="Seu nome"
                            {...register('nome')}
                        />
                        <TextField 
                            id="standard-basic" 
                            label="Nome da loja"
                            {...register('nome_loja')} 
                        />
                        <TextField 
                            id="standard-basic" 
                            label="E-mail"
                            {...register('email')}
                        />
                        <FormControl 
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel 
                                htmlFor="standard-adornment-password">
                                    Nova senha
                            </InputLabel>
                            <Input
                                id="standard-adornment-password"
                                {...register('senha')}
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Repita a nova senha</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div className="bottomContent">
                        {loading && <CircularProgress />}
                        {err && <Alert severity="error">{err}</Alert>}
                            <Link to={`/perfil/${id}`}>CANCELAR</Link>
                            <Button 
                                className={classes.addButton} 
                                variant="contained" 
                                color="primary" 
                                type="submit"
                            >
                                    EDITAR PERFIL
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser;