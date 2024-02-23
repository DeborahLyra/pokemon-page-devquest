import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsList } from '../cardsList';
import styled from 'styled-components';
import axios from 'axios';
import { AddMoreButton } from '../addMoreButton/AddMoreButton';

export function MainPage() {
    const { theme } = useContext(ThemeContext)

    const [pokemons, setPokemons] = useState([])
  

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
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    useEffect(() => {
        getPokemons()
    }, [])

    console.log(pokemons)
    return (
        <DivMainPage style={{ color: theme.color, backgroundColor: theme.background }}>
            <CardsList pokemon={pokemons} />
            <AddMoreButton/>
        </DivMainPage>
    )
}

const DivMainPage = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`