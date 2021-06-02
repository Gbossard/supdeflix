import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SearchBar } from '../navigation/SearchBar';

export function MoviesList() {
    const { id } = useParams();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const selectedMovie = movies.find((movie) => {
        return movie.id === parseInt(id);
      });
    
    const [everythingLoaded, setEverythingLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <SearchBar placeholder={"Search movies..."} value={query} onChange={(e) => setQuery(e.target.value)}/>
            <Movies isLoading={isLoading} movies={movies} selectedId={id} onScroll={handleScroll} />
            <AnimatePresence>
                {id !== undefined && <MovieDetail id={id} movie={selectedMovie} />}
            </AnimatePresence>
        </>
    );
}