import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import styled from 'styled-components';

export function CardsList({ pokemon }) {
    const { theme } = useContext(ThemeContext)
    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            {
                pokemon.map((p)=>{
                    return(
                        <div></div>
                    )
                })
            }
        
        </div>
    )
}