import React from 'react';
import {
    pathFavorites,
    pathMovies
} from "../../utils/constants/constants-navigation";
import { NavLink } from "react-router-dom";

export function Header() {
    const menuItems = [
        {path: pathMovies, label: "movies"},
        {path: pathFavorites, label: "favorites"}
    ];

    return ( 
        <>
            <header>
                <h1 class="title">SUPDEFLIX</h1>
                <nav>
                    <ul>
                        {menuItems.map(({path, label}) => 
                            <li key={menuItems.id}><NavLink to={path}>{label}</NavLink></li>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
}