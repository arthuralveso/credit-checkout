import React from 'react'
import { useInputValue } from '../../hooks/InputValueContext'
import { Container, CardInformation } from './styles';

export function Card() {
    const { value } = useInputValue();
    return (

        <Container>
            <div>
                <h1>VISA</h1>


                <CardInformation>
                    <p>{value.numero}</p>
                    <span>
                        <h4>{value.nome}</h4>
                        <h4>{value.vencimento}</h4>
                    </span>

                </CardInformation>

            </div>
        </Container>
    )
}
