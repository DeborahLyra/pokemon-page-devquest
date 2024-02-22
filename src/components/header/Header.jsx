import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import styled from 'styled-components';
import PokemonImage from '../../../public/pokemon.svg'
import { ThemeToggleButton } from '../theme-toggle-button/ThemeToggleButton';

export function Header() {
    const { theme } = useContext(ThemeContext)
    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            <HeaderTopInfo>
                <ThemeToggleButton />
                <HeaderInput placeholder='Search for a Pokémon'/>
            </HeaderTopInfo>

            <HeaderContainer>
                <img src={PokemonImage} />
            </HeaderContainer>
        </div>
    )
}

const HeaderContainer = styled.header`
    height: 25vh;
    border-bottom: 2px solid var(--gold-yellow);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
    width: 100%; 
    height: auto; 
    max-width: 500px; 
    padding-bottom: 3rem;
    }
`

const HeaderTopInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const HeaderInput = styled.input`
    height: 2rem;
    padding: 10px 20px;
    border: 2px solid var(--card-yellow);
    max-width: 15rem;
    border-radius: 5px;

    &:focus {
        outline: none;
    }          
`


