import React from 'react'
import { Container, LeftContainer, RightContainer, TitleSection, HeaderSection } from './styles'
import leftArrow from '../../assets/back-arrow.svg'
import cardIcon from '../../assets/card-icon.svg'
import rightArrow from '../../assets/right-arrow.svg'
import confirmIcon from '../../assets/confirm-icon.svg'
import { CardInformationForm } from '../../components/CardInformationForm'
import { Card } from '../../components/Card'

export function Layout() {
    return (
        <Container>
            <LeftContainer>
                <span>
                    <img src={leftArrow} alt="voltar" />
                    <p>Alterar forma de pagamento</p>
                </span>

                <TitleSection>
                    <div>
                        <img src={cardIcon} alt="card" />
                    </div>

                    <p>Adicione um novo cartão de crédito</p>
                </TitleSection>

                <Card />


            </LeftContainer>

            <RightContainer>
                <header>
                    <HeaderSection hasImage={true}>
                        <span>
                            <div>
                                <img src={confirmIcon} alt="confirm" />
                            </div>
                            <p>Carrinho</p>
                        </span>
                    </HeaderSection>

                    <img src={rightArrow} alt="confirm" />

                    <HeaderSection hasImage={false}>
                        <span>
                            <div>
                                <p>2</p>
                            </div>
                            <p>Pagamento</p>
                        </span>
                    </HeaderSection>

                    <img src={rightArrow} alt="confirm" />

                    <HeaderSection hasImage={false}>
                        <span>
                            <div>
                                <p>3</p>
                            </div>
                            <p>Confirmação</p>
                        </span>
                    </HeaderSection>

                </header>

                <CardInformationForm />



            </RightContainer>
        </Container>
    )
}
