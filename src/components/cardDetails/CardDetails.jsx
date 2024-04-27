import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/theme-context';
import { Button } from '../button/Button'
import { ThemeToggleButton } from '../theme-toggle-button/ThemeToggleButton';
import PokemonImage from '../../../public/pokemon.svg'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export function CardDetails() {

  const [pokemonDetails, setPokemonDetails] = useState({});
  const { id } = useParams();


  const getAbilitiesText = async (abilities) => {
    try {
      const abilitiesTexts = await Promise.all(abilities.map(async (ability) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
        return response.data.effect_entries[1].effect;
      }));
      return abilitiesTexts;
    } catch (error) {
      console.error('Erro ao obter detalhes da habilidade:', error);
      return null;
    }
  }

  const getPokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const abilitiesTexts = await getAbilitiesText(response.data.abilities.map(ability => ability.ability.name));
      setPokemonDetails({
        image: response.data.sprites.front_default,
        name: response.data.name,
      })

      setPokemonDetails(prevState => ({
        ...prevState,
        types: response.data.types.map(element => element.type.name),
        abilities: response.data.abilities.map((element, index) => ({
          name: element.ability.name,
          text: abilitiesTexts[index]
        })),
        moves: response.data.moves.map(element => element.move.name),
      }))

    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  useEffect(() => {
    getPokemons()
    getAbilitiesText()
  }, [])

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
        <img src={pokemonDetails.image} alt="" width={'500px'} />
        <DetailsText>
          <h3>{pokemonDetails.name}</h3>

          <h4>Type:</h4>
          {pokemonDetails.types?.map((type, index) => (
            <p key={index}>{type}</p>
          ))}

          <h4>Moves:</h4>
          <UlMoves>
            {pokemonDetails.moves?.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </UlMoves>

          <h4>Abilities:</h4>
          <UlAbilities>
            {pokemonDetails.abilities?.map((ability, index) => (
              <li key={index}>
                <strong>{ability.name}</strong>: {ability.text}
              </li>
            ))}
          </UlAbilities>

        </DetailsText>
      </ContainerDetailsDiv>

    </div>
  )
}

const UlMoves = styled.ul`
height: 150px;
overflow-y: auto;
border: 2px solid var(--gold-yellow);
border-radius: 5px;
padding: 8px;
background-color: var(--blue);

  li {
    font-size: 1.2rem;
    
  }
`

const UlAbilities = styled.ul`
height: 150px;
overflow-y: auto;
border: 2px solid var(--gold-yellow);
border-radius: 5px;
padding: 8px;
background-color: var(--blue);

  li {
    font-size: 1.2rem;
    list-style: none;
  }
`

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
  gap: 15px;
  width: 50%;
  border: 4px solid var(--gold-yellow);
  padding: 1rem;

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--blue-dark);
  }

  h4 {
    font-size: 1.5rem;
  }

  p{
    font-size: 1.2rem;
  }
`