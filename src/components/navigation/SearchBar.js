import React from 'react';

export function SearchBar({placeholder, query, onChange}) {
    const selectItems = [
        {value: "on Netflix"},
        {value: "on Disney+"},
        {value: "on Prime Video"},
    ];

    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" name="query" placeholder={placeholder} value={query} onChange={onChange}/>
            </div>
            <div className="select-platform">
                <select value={selectItems.value} >
                    {selectItems.map(({value}) => 
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>
            </div>
        </div>
    );
}