import React from 'react'
import { useCardValue } from '../../hooks/CardValueContext'
import { Container, CardInformation } from './styles';

export function Card() {
    const { cardData } = useCardValue();
    return (

        <Container>
            <div>
                <h1>VISA</h1>


                <CardInformation>
                    <p>{cardData.numero}</p>
                    <span>
                        <h4>{cardData.nome}</h4>
                        <h4>{cardData.vencimento}</h4>
                    </span>

                </CardInformation>

            </div>
        </Container>
    )
}
