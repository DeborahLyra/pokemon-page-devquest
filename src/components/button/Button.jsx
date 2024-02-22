import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import styled from 'styled-components';

export function Button(props) {

    const { theme } = useContext(ThemeContext);

  return (
   <BtnGeneral  
   {...props}
   style={{color: theme.color, backgroundColor: theme.btnBackground}}
   /> 
  )
}

const BtnGeneral  = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem; 
    border: 2px solid var(--gold-yellow);
    margin: 1rem;

    &:focus {
      outline: none
    }

`