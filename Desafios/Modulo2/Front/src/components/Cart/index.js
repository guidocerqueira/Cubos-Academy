import React from 'react';
import {ReactComponent as HumanIllu} from '../../assets/images/person-illustraton.svg';
import {ReactComponent as CpIcon} from '../../assets/images/coupon-icon.svg';
import {ReactComponent as PlusIcon} from '../../assets/images/plus-icon.svg';
import {ReactComponent as MinusIcon} from '../../assets/images/minus-icon.svg';
import {ReactComponent as TrashIcon} from '../../assets/images/trash-icon.svg';
import './styles.css';

function Cart(props){
    const isCartEmpty = props.inCartMovies.length === 0;

    function handleCpAdd(e) {
        if (e.key !== 'Enter' || e.target.value !== 'htmlnaoelinguagem') {
            return
        }

        props.setUsingCp(true);
    }

    return(
        <div className="cart">
            <h2 className="carttitle">Carrinho</h2>
            <div className="cartcontainer">
                {isCartEmpty ? (
                    <div className="emptycart">
                        <h2>Seu carrinho está vazio</h2>
                        <h3>Adicione filmes agora</h3>
                        <HumanIllu className="cartillu" />
                    </div>
                ) : (
                    props.inCartMovies.map(movie => (
                        <div className="moviecart">
                            <img src={movie.bgIMG} alt={movie.Title} />
                            <div className='moviecartinfo'>
                                <span className='moviecarttitle'>{movie.title}</span>
                                <span className='moviecartprice'>R$ {movie.price}</span>
                            </div>
                            <div className='moviecartactions'>
                                <PlusIcon onClick={() => props.handleMovieAdd(movie.title)} />
                                {movie.quantity}
                               {movie.quantity > 1 ? <MinusIcon onClick={() => props.handleMovieRemoval(movie.title)} /> : <TrashIcon onClick={() => props.handleMovieRemoval(movie.title)} />}
                            </div>  
                        </div>
                    ))
                )}
                
                <div className="cpcontainer">
                    <span>Insira seu cupom aqui</span>
                    <div className="cpcontainer__inputgp">
                        <input className="cpcontaner__input" type="text" placeholder="Desconto" onKeyDown={e => handleCpAdd(e)} />
                        <CpIcon className="cpcontainer__icon" onClick={e => handleCpAdd(e)}  />
                    </div>
                </div>
                {!isCartEmpty ? <PriceBtn type='basket' price={props.totalPrice}>Confirme seus dados</PriceBtn> : ''}
            </div>
        </div>
    )
}

export default Cart;