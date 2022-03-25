import React from 'react'
import { Container, LeftWrap, RightWrap, TitleSection, PurchaseSteps } from './styles'
import leftArrow from '../../assets/back-arrow.svg'
import cardIcon from '../../assets/card-icon.svg'
import rightArrow from '../../assets/right-arrow.svg'
import confirmIcon from '../../assets/confirm-icon.svg'
import { CardInformationForm } from '../../components/CardInformationForm'
import { Card } from '../../components/Card'

export function Layout() {
    return (
        <Container>
            <LeftWrap>
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


            </LeftWrap>

            <RightWrap>
                <header>
                    <PurchaseSteps hasImage={true}>
                        <span>
                            <div>
                                <img src={confirmIcon} alt="confirm" />
                            </div>
                            <p>Carrinho</p>
                        </span>
                    </PurchaseSteps>

                    <img src={rightArrow} alt="confirm" />

                    <PurchaseSteps hasImage={false}>
                        <span>
                            <div>
                                <p>2</p>
                            </div>
                            <p>Pagamento</p>
                        </span>
                    </PurchaseSteps>

                    <img src={rightArrow} alt="confirm" />

                    <PurchaseSteps hasImage={false}>
                        <span>
                            <div>
                                <p>3</p>
                            </div>
                            <p>Confirmação</p>
                        </span>
                    </PurchaseSteps>

                </header>

                <CardInformationForm />



            </RightWrap>
        </Container>
    )
}
