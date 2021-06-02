import React from 'react';
import { useEffect} from 'react';
import { AnimatePresence } from "framer-motion";
import { SearchBar } from '../navigation/SearchBar';
import { MoviesItem } from './MoviesItem';
import { MovieDetail } from './MovieDetail';
import { listMovies } from '../../utils/api/routes';
import {useParams} from "react-router-dom";
import {useState} from 'react';
import {useInfinityScroll} from '../../useInfinityScroll';

export function MoviesList() {
    const { id } = useParams();
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const selectedMovie = movies.find((movie) => {
        return movie.id === parseInt(id);
      });
    
    const [everythingLoaded, setEverythingLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    
    const handleScroll = useInfinityScroll(async (page) => {
        if (everythingLoaded) {
            return;
        }
        try {
            setIsLoading(true);
            const data = await (await listMovies(page, 10)).json();
            setEverythingLoaded(data.length < 10);
            setMovies((e) => page === 1 ? data : [...e, ...data]);
            setIsLoading(false);    
        } catch (err) {
          console.log(err);
        }
    });

    useEffect(() => {
        setIsLoading(true);

        if(!query) {
            fetch("`https://apimovies.fr/api/movies", {
                "method": "GET" 
            })
            .then(response => response.json())
            .then((data) => {
                setMovies(data.data[0])
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
        } 
        else {
            setTimeout(() => {
                fetch("https://apimovies.fr/api/movies/search?search=" + encodeURIComponent(query), {
                    "method": "GET" 
                })
                .then(response => response.json())
                .then((data) => {
                    setMovies(data.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error(err);
                });
            }, 500);
        }
    }, [query]);

    return (
        <>
            <SearchBar placeholder={"Search movies..."} value={query} onChange={(e) => setQuery(e.target.value)}/>
            <MoviesItem isLoading={isLoading} movies={movies} selectedId={id} onScroll={handleScroll} />
            <AnimatePresence>
                {id !== undefined && <MovieDetail id={id} movie={selectedMovie} />}
            </AnimatePresence>
        </>
    );
}