import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import useAuth from '../../hook/useAuth';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '1.5rem',
        height: 330,
        marginRight: '3.2rem',
        maxWidth: 180,
    },
    media: {
        height: 190,
        paddingTop: '56.25%',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: '1.2rem',
        marginTop: '.8rem',
    },
    textBottom: {
        fontSize: '1rem',
        marginTop: '1rem',
    },
    addButton: {
        fontSize: '1rem',
        maxWidth: 140,
    },
  }));

function Prod() {
    const classes = useStyles();
    const history = useHistory();
    const { token } = useAuth();
    const [products, setProducts] = useState([]);

    if (!token) history.push('/');

    async function loadingProducts() {
        try {
            const response = await fetch('http://localhost:8000/produtos', {
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            });

            const userProduct = await response.json();
            
            setProducts(userProduct);
            
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        loadingProducts();
    }, []);
    
    return(
        <div className="products-list">
            <Sidebar />
            <div className="list-content">
                <h1>Lojinha de Plantas</h1>
                <h2>Seus produtos</h2>
                <div className="card-list">
                    {products.map(product => (
                        <Card className={classes.root}>
                            <Link to={`/editarproduto/${product.id}`}><CardMedia
                                className={classes.media}
                                image={product.imagem}
                                title={product.nome}
                                id={product.id}
                            />
                            </Link>
                            <CardContent className={classes.content}>
                                <Typography variant="title" color="textPrimary" component="h4">
                                    {product.nome}
                                </Typography>
                                <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                                    {product.descricao}
                                </Typography>
                                <div className={classes.bottom}>
                                    <Typography className={classes.textBottom} variant="body2" color="textSecondary" component="p">
                                        {product.estoque}
                                    </Typography>
                                    <Typography className={classes.textBottom} variant="body2" color="textPrimary" component="p">
                                        R${product.preco}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Button className={classes.addButton} variant="contained" color="primary" type="">
                <Link to="/addproduto">ADICIONAR PRODUTO</Link> 
                </Button>
            </div>
        </div>
    )
}

export default Prod;