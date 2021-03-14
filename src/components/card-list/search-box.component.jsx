import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => (<input 
    className = 'search'
    placeholder = 'Monster Name' 
    type = 'search' 
    onChange = {
        e => props.changeSearch(e) 
    }    
/>)    