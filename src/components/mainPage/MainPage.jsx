import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsList } from '../cardsList/CardsList';
import styled from 'styled-components';
import axios from 'axios';

export function MainPage() {
    const { theme } = useContext(ThemeContext)

    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0);

    const getPokemons = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
            const pokemonData = await Promise.all(response.data.results.map(async (pokemon) => {
                const pokemonResponse = await axios.get(pokemon.url);
                return {
                    name: pokemon.name,
                    image: pokemonResponse.data.sprites.front_default
                };
            }));
            setPokemons(pokemonData);
 
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    useEffect(() => {
        getPokemons()
    }, [])

    console.log(pokemons)
    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            <CardsList pokemon={pokemons} />
        </div>
    )
}

