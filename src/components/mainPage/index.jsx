import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { CardsList } from '../cardsList';
import styled from 'styled-components';
import axios from 'axios';
import { AddMoreButton } from '../addMoreButton/AddMoreButton';

export function MainPage() {
    const { theme } = useContext(ThemeContext)

    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(10)
    const [search, setSearch] = useState('')


    const getPokemons = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            const pokemonData = await Promise.all(response.data.results.map(async (pokemon) => {
                const pokemonResponse = await axios.get(pokemon.url);
                return {
                    name: pokemon.name,
                    image: pokemonResponse.data.sprites.front_default
                };
            }));
            setPokemons(pokemonData);
            setLimit(limit + 10)
            // console.log(response.data)
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };


    useEffect(() => {
        getPokemons()
    }, [])


    const getPomeonsByName = async (name) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            console.log(response.data.sprites.front_default)
            const pokemonData = {
                name: response.data.name,
                image: response.data.sprites.front_default
            }
            setPokemons([pokemonData]);
            // console.log(response.data)
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    };

    const getName = (event) => {
        const query = event.target.value;

        setSearch(query);
    }

    if(pokemons.length === 1){

    return (
      
        <DivMainPage style={{ color: theme.color, backgroundColor: theme.background }}>
            <DivSearchPoke>
                <label htmlFor="input">Search for a Pokémon</label>
                <SearchInput
                    id='input'
                    placeholder='Search for a Pokémon'
                    style={{ color: theme.color, backgroundColor: theme.background }}
                    onChange={getName}
                />
                <button onClick={() => getPomeonsByName(search)}>Search</button>
            </DivSearchPoke>

            <CardsList pokemon={pokemons} />
        </DivMainPage>
    )
    }

    return (
      
        <DivMainPage style={{ color: theme.color, backgroundColor: theme.background }}>
            <DivSearchPoke>
                <label htmlFor="input">Search for a Pokémon</label>
                <SearchInput
                    id='input'
                    placeholder='Search for a Pokémon'
                    style={{ color: theme.color, backgroundColor: theme.background }}
                    onChange={getName}
                />
                <button onClick={() => getPomeonsByName(search)}>Search</button>
            </DivSearchPoke>

            <CardsList pokemon={pokemons} />
           
           <AddMoreButton onClick={() => getPokemons()} />
        </DivMainPage>
    )
}

const DivMainPage = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh

    label{
        font-size: 1.5rem;
        margin-bottom: 10px;
        font-weight: bold;
        color: var(--blue-dark);
    }
`

const SearchInput = styled.input`
    height: 3rem;
    width: 100%;
    padding: 10px 20px;
    border: 2px solid var(--card-yellow);
    max-width: 15rem;
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
        outline: none;
    }          
`

const DivSearchPoke = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    button{
        width: 85%;
        padding: 5px;
        border-radius: 5px;
        border: 2px solid var(--gold-yellow);
        background-color:var(--blue);
        font-weight: bold;
        color:var(--gold-yellow);
        cursor: pointer;

        &:focus {
            outline: none;
        } 

        &:hover {
            background-color: var(--blue-dark); 
        }
    }
`