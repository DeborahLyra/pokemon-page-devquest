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
                <HeaderInput placeholder='Search for a Pokemon'/>
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
`

const HeaderInput = styled.input`
    height: 2rem;
    width: 15rem;
    padding: 10px 20px;
    border: 2px solid var(--gold-yellow);

    &:focus {
        outline: none;
    }
`


