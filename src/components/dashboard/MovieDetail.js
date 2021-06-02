import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function MovieDetail({ id, movie }) {
   
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: "auto" }}
                className="overlay"
            >
                <Link to="/" />
            </motion.div>
            <div className="card-content-container open">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                {movie !== null && <>
                    <motion.div
                    className="card-image-container"
                    layoutId={`card-image-container-${id}`}
                    >
                    <img className="card-image" src={movie && movie.poster} alt="" />
                    </motion.div>
                    <motion.div
                    className="title-container"
                    layoutId={`title-container-${id}`}
                    >
                    <div>{movie && movie.title}</div>
                    </motion.div>
                </>}
                </motion.div>
            </div>
        </>
    );
}