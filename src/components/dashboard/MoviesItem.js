import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Item({ movie, isSelected }) {
    return (
      <div className={`card${isSelected ? ' card-selected' : ''}`}>
        <div className="card-content-container">
          <motion.div className="card-content" layoutId={`card-container-${movie.id}`}>
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${movie.id}`}
            >
              <img className="card-image" src={movie.poster} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${movie.id}`}
            >
              <div>{movie.title}</div>
            </motion.div>
          </motion.div>
        </div>
        <Link to={'/' + movie.id} className={`card-open-link`} />
      </div>
    );
}

export function MoviesItem({ isLoading, movies, selectedId, onScroll }) {
    
    return (
        <>
            <div style={{overflow: 'auto'}} className="list-movies" onScroll={onScroll}>
                {movies.map(movie => (
                    <Item key={movie.id} movie={movie} isSelected={movie.id === selectedId} />
                ))}
            </div>
            {isLoading && <div className="loading-state">
                <ClipLoader color="#888888" loading={true} size={100} />
                <div>Loading movie...</div>
            </div>}
        </>
    );
}