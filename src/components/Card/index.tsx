import React, { useState } from 'react';
import { useCardInformation } from '../../hooks/CardInformationsContext';
import { CardInformation, Container } from './styles';
import visa from '../../assets/icon-visa.svg'
import master from '../../assets/icon-mastercard.svg'

export function Card() {
    const { cardData } = useCardInformation();
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

        <Container brand={getBrand(cardData.cardNumber)}>
            {getBrand(cardData.cardNumber)}


            <CardInformation>
                <p>{cardData.cardNumber}</p>
                <span>
                    <h4>{cardData.ownerName}</h4>
                    <h4>{cardData.expirationDate}</h4>
                </span>

            </CardInformation>

        </Container>
    )
}
