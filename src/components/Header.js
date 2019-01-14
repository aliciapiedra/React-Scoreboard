import React from 'react';
import Stats from './Stats';


const Header = ({ title, players })=> (
    <header> 
        <h1>{title}</h1>
        <Stats players={ players }/> 
    </header>
)

export default Header 