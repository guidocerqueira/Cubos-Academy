import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import useAuth from '../../hook/useAuth';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: 280,
        justifyContent: 'space-between',
        marginRight: '3.2rem',
        marginTop: '-3.2rem',
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
    addButton: {
        fontSize: '1rem',
        maxWidth: 140,
    },
  }));

function NewProd() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const { token } = useAuth();

    if (!token) history.push('/');
    
    async function onSubmit(data) {
        
        setLoading(true);
        setErr('');
    
        try {
          const response = await fetch('http://localhost:8000/produtos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
          
          const productData = await response.json();
    
          console.log(productData);
    
          history.push('/produtos')
        } catch (error) {
          setErr(error.message);
        }
        
        setLoading(false);
      }

    return(
        <div className="product-form">
            <Sidebar />
            <div className="productContent">
                <h1>Nome da loja</h1>
                <h2>Adicionar Produto</h2>
                <div className="card-list">
                    <form 
                        className={classes.root} 
                        noValidate 
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField 
                            id="standard-basic" required 
                            label="Nome do produto"
                            {...register('nome')}  
                        />
                        <div className={classes.inputProduct}>
                            <Input 
                                className={classes.inputPrice}
                                id="standard-adornment-amount" required
                                label="Preço"
                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                {...register('preco')}
                            />
                            <Input 
                            className={classes.inputStorage}
                                id="standard-adornment-amount" required
                                label="Estoque"
                                startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                                {...register('estoque')}
                            />
                        </div>
                        <TextField 
                            id="standard-basic" 
                            label="Descrição do produto"
                            {...register('descricao')} 
                        />
                        <TextField 
                            id="standard-basic" 
                            label="Imagem"
                            {...register('imagem')} 
                        />
                
                        {loading && <CircularProgress />}
                        {err && <Alert severity="error">{err}</Alert>}
                        <div className="bottomContent">
                            <a href="/produtos">Cancelar</a>
                            <Button className={classes.addButton} variant="contained" color="primary" type="submit">
                                ADICIONAR PRODUTO 
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewProd;