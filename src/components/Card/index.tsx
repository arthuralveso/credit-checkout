import React, { useState } from 'react';
import { useCardValue } from '../../hooks/CardValueContext';
import { CardInformation, Container } from './styles';
import visa from '../../assets/icon-visa.svg'
import master from '../../assets/icon-mastercard.svg'

export function Card() {
    const { cardData } = useCardValue();
    const [change, setChange] = useState<boolean>(false);

    const cardbrand: any = {
        '55': <img src={master} alt="visa-logo" />,
        '41': <img src={visa} alt="visa-logo" />,
    }

    function getBrand(number: string) {
        if (number && number.length >= 2) {
            const prefix = number.substring(0, 2);

            return cardbrand.hasOwnProperty(prefix) ? cardbrand[prefix] : false
        }

        return cardbrand['undefined'];
    }

    return (

        <Container isChanged={change}>
            {getBrand(cardData.numero)}


            <CardInformation>
                <p>{cardData.numero}</p>
                <span>
                    <h4>{cardData.nome}</h4>
                    <h4>{cardData.vencimento}</h4>
                </span>

            </CardInformation>

        </Container>
    )
}
