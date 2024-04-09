import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import styled from 'styled-components';

export function CardDetails({ pokemon }) {
  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }}>
    {pokemon.map((poke, index) => (
        <div key={index} style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
            <h4>{poke.name}</h4>
            <div>
                <img src={poke.image} alt={poke.name} />
            </div>
        <button>Click here for more</button>
        </div>
    ))}
</div>
  )
}
