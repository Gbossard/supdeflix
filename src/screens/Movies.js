import React from 'react';
import { Header } from '../components/navigation/Header';
import { MoviesList } from '../components/dashboard/MoviesList';

function Movies() {
    return (
        <div className="wrapper">
            <Header/>
            <MoviesList/>
        </div>
    );
}

export default Movies;