import './styles.css';

function Filters(props){
    function handleFClick(filter){
        if (filter === 'all') {
            props.setMovieCatFilter([]);
            return
        }

        const chosenFilter = props.movieCatFilter.includes(filter);

        if (chosenFilter) {
            const newFilters = props.movieCatFilter.filter(x => x !== filter);
            props.setMovieCatFilter(newFilters);
            return
        }


        props.setMovieCatFilter([...props.movieCatFilter, filter]);

    
    }


    return(
        <div className="filters">
            <button className={`filter ${movieCatFilter.length === 0 ? 'filteractive' : ''}`} onClick={() => handleFClick('all')}>Todos</button>
            <button className={`filter ${movieCatFilter.includes('action') ? 'filteractive' : ''}`} onClick={() => handleFClick('action')}>Ação</button>
            <button className={`filter ${movieCatFilter.includes('romance') ? 'filteractive' : ''}`} onClick={() => handleFClick('romance')}>Romance</button>
            <button className={`filter ${movieCatFilter.includes('science fiction') ? 'filteractive' : ''}`} onClick={() => handleFClick('science fiction')}>SciFi</button>
            <button className={`filter ${movieCatFilter.includes('horror') ? 'filteractive' : ''}`} onClick={() => handleFClick('horror')}>Terror</button>
        </div>
    )
}

export default Filters;