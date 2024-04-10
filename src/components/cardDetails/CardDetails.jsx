import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/theme-context';
import { Button } from '../button/Button'
import { ThemeToggleButton } from '../theme-toggle-button/ThemeToggleButton';
import PokemonImage from '../../../public/pokemon.svg'

export function CardDetails() {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }}>
      <HeaderDetails style={{ color: theme.cardColor, backgroundColor: theme.detailsHeaderColor }}>
        <div>
         <a href="/"> <Button>Go back</Button></a>
          <ThemeToggleButton />
        </div>
        <img src={PokemonImage} alt="" width={'200px'} />
      </HeaderDetails>
      <ContainerDetailsDiv>
        <img src={PokemonImage} alt="" width={'500px'} />
        <DetailsText>
          <h3>nome</h3>
          <h4>movimentos</h4>
          <h4>lista de habilidades</h4>
          <p>texto das habilidades</p>
          <h4>tipo</h4>

        </DetailsText>
      </ContainerDetailsDiv>

    </div>
  )
}

const HeaderDetails = styled.div`
  height: 10vh;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  align-items: center;
  gap: 10px
  }
`

const ContainerDetailsDiv = styled.div`
  height: 90vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const DetailsText = styled.div`
  display: flex;
  flex-direction: column;
`