import React from 'react';
import {ReactComponent as Star} from '../../assets/images/star.svg';
import {ReactComponent as GoldenStar} from '../../assets/images/golden-star.svg'
import './styles.css';

function MovieCard(props){
    const movie = props.movie;
    const bg = `linear-gradient(rgba(0,0,0,0.3) 100%, rgba(0,0,0,0.3) 100%), url('${movie.bgIMG}') no-repeat center / cover`;

    return (
        <div className="moviecard" stle ={(bg)}>
            <Star className={`star ${movie.isStarred ? 'active' : ''}`} onClick={()=> props.handleStarClick(props.title)} />
            <div className="movieinfo">
                <h3>{movie.title}</h3>
                <div className="moviestars">
                    <GoldenStar />
                    {movie.starsCount}
                </div>
            </div>
            <button className="pricebtn movie" onClick={() => props.handleMovieBuy(movie)}>
                Carrinho
                <span className="price">{movie.price}</span>
            </button>
        </div>
    )

}

export default MovieCard;