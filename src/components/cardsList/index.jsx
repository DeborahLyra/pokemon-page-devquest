/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export function CardsList({ pokemon }) {

    const reloadPage = () => {
        window.location.reload();
    };

    const { theme } = useContext(ThemeContext)
    if (pokemon.length === 1) {

        const poke = pokemon[0];
        return (
            <DivCardContainerSearch style={{ color: theme.color, backgroundColor: theme.background }}>
                <DivCard style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
                    <h4>{poke.name}</h4>
                    <DivImgCard>
                        <img src={poke.image} alt={poke.name} />
                    </DivImgCard>
                    <Link to={`/details/${poke.name}`}>Click here for details</Link>
                </DivCard>
                <button style={{ color: theme.color, backgroundColor: theme.background }}
                    onClick={reloadPage}
                >Back to the List
                </button>
            </DivCardContainerSearch>

        );
    }
    return (
        <DivCardContainer style={{ color: theme.color, backgroundColor: theme.background }}>
            {pokemon.map((poke, index) => (
                <DivCard key={index} style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
                    <h4>{poke.name}</h4>
                    <DivImgCard>
                        <img src={poke.image} alt={poke.name} />
                    </DivImgCard>
                    <Link to={`/details/${index + 1}`}>Click here for details</Link>
                </DivCard>
            ))}
        </DivCardContainer>
    )
}

const DivCardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   padding: 1.5rem;
   gap: 2rem;
   
`

const DivCardContainerSearch = styled.div`
   padding: 1.5rem;
    height: 80vh;
    display: flex;
    flex-direction: column;
    button{
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem; 
    border: 2px solid var(--card-yellow);
    margin-top: 1rem; 

    &:focus {
      outline: none
    }
    }
   
`

const DivCard = styled.div`
    min-width: 200px;
    min-height: 200px;
    border-radius: 15px;
    padding: 0.5rem;
    
    h4 {
        text-transform: uppercase;
        text-align: center;
    }
    
    img {
        width: 100%;
    }

    a {
        width: 100%;
        padding: 5px;
        margin-top: 0.5rem;
        background-color: var(--blue);
        color: var(--card-yellow);
        font-weight: bold;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s; 
       

        display: flex;
        

        &:hover {
            background-color: var(--blue-dark); 
        }
    } 
`

const DivImgCard = styled.div`
   border: 2px solid #316cb3;
   margin: 0.3rem;
`

