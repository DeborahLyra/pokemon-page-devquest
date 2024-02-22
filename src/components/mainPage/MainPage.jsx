import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsList } from '../cardsList/CardsList';
import styled from 'styled-components';
import { Axios } from 'axios';

export function MainPage() {
    const { theme } = useContext(ThemeContext)

    const [pokemons, setPokemons] = useState([])

    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            <CardsList pokemon={pokemons}/>

        </div>
    )
}
