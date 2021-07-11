import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import './styles.css';
import useAuth from '../../hook/useAuth';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: 290,
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

function EditProd() {
    const classes = useStyles();
    const { token } = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState({});

    if (!token) history.push('/');
    
    let { id } = useParams();

    async function loadingProduct() {
        try {
            const response = await fetch(`http://localhost:8000/produtos/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            });

            const userProduct = await response.json();
            
            setProducts(userProduct[0]);
            
        } catch (error) {
            console.log(error.message);
        }
    }
    

    async function onSubmit(data) {
        
        setLoading(true);
        setErr('');
    
        try {
          const response = await fetch(`http://localhost:8000/produtos/${id}`, {
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
    
    useEffect(() => {
        loadingProduct();
    }, []);

    const { imagem } = products;
    
    return(
        <div className="product-form">
            <Sidebar />
            <div className="productContent">
                <h1>Nome da loja</h1>
                <h2>Editar Produto</h2>
                <div className="card-list">
                    <form className={classes.root} 
                        noValidate 
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField 
                            id="standard-basic" 
                            label="Nome do produto"
                            {...register('nome')} 
                        />
                        <div className={classes.inputProduct}>
                            <Input className={classes.inputPrice}
                                id="standard-adornment-amount"
                                label="Preço"
                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                {...register('preco')}
                            />
                            <Input className={classes.inputStorage}
                                id="standard-adornment-amount"
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
                    </form>
                    <img className={classes.imageProduct}
                        src={imagem}
                        alt="exemplo do produto" 
                    />
                </div>
                {loading && <CircularProgress />}
                {err && <Alert severity="error">{err}</Alert>}
                <div className="bottomContent">
                    <Link to="/produtos">Cancelar</Link>
                    <Button 
                        className={classes.addButton} variant="contained" 
                        color="primary"
                        type="submit"
                    >
                        SALVAR ALTERAÇÕES
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EditProd;