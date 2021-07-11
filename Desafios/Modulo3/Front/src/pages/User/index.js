import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles.css';
import useAuth from '../../hook/useAuth';


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: 200,
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
        marginRight: '.5rem'
    },
    inputStorage: {
        marginLeft: '.5rem'
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

function User() {
    const classes = useStyles();
    const { token } = useAuth();
    const history = useHistory();
    const [data, setData] = useState({});

    if (!token) history.push('/');
    
    let { id } = useParams();

    async function loadingUser() {
        try {
            const response = await fetch(`http://localhost:8000/perfil/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            });

            const userData = await response.json();
            setData(userData[0]);   
            console.log(userData[0]);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        loadingUser();
    }, []);

    return(
        <div className="product-form">
            <Sidebar />
            <div className="productContent">
                <h1>{data.nome_loja}</h1>
                <h2>Perfil</h2>
                <div className="card-list">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label={data.nome} />
                        <TextField id="standard-basic" label={data.nome_loja} />
                        <TextField id="standard-basic" label={data.email} />
                    </form>
                </div>
                <div className="bottomContent">
                    <Link to={`/editarperfil/${id}`}>
                        <Button 
                            className={classes.addButton} variant="contained" 
                            color="primary" 
                        >
                            EDITAR PERFIL
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default User;