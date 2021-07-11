import { useState } from 'react';
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg';
import './styles.css'; 

export default function Search(props){
    const [search, setSearch] = useState('');

    function handleKeyDown(e){
        if (e.key !== 'Enter') return;

        props.setMovieTitleFilter(search);
    }

    return (
        <div className="searchcontainer">
            <input className="searchcontainter__input" type="text" placeholder="Pesquisar filmes.." onChange={e => setSearch(e.target.value)} value={search} onKeyDown={e => handleKeyDown(e)} />
            <SearchIcon className="searchcontainer__icon" onClick={() => props.setMovieTitleFilter(search)} />
        </div>
    )
}