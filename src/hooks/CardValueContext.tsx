import React, { createContext, ReactNode, useContext, useState } from "react";

interface ICardProps {
    children: ReactNode
}

interface ICard {
    numero: string;
    nome: string;
    vencimento: string;
}

interface ICardContextData {
    cardData: ICard;
    handleToggleInput: (value: string, key: number) => void
}

export const CardValueContext = createContext<ICardContextData>({} as ICardContextData);


export function CardValueProvider({ children }: ICardProps) {
    const [cardData, setCardData] = useState<ICard>({
        numero: '**** **** **** ****',
        nome: 'NOME DO TITULAR',
        vencimento: '00/00',
    } as ICard)


    function handleToggleInput(newValue: string, key: number) {

        switch (key) {
            case 1:
                return handleToggleNumero(newValue);
            case 2:
                return handleToggleNome(newValue);
            case 3:
                return handleToggleVencimento(newValue);
            case 4:
                return handleToggleVencimento(newValue);
            default:
                return;
        }
    }

    function handleToggleNumero(newValue: string) {
        const valor = { ...cardData };

        valor.numero = newValue;

        setCardData(valor)
    }

    function handleToggleNome(newValue: string) {
        const valor = { ...cardData };

        valor.nome = newValue.toUpperCase();

        setCardData(valor)
    }

    function handleToggleVencimento(newValue: string) {
        const valor = { ...cardData };

        valor.vencimento = newValue;

        setCardData(valor)
    }



    return (
        <CardValueContext.Provider value={{ handleToggleInput, cardData }}>
            {children}
        </CardValueContext.Provider>
    )
}

export function useCardValue() {
    const context = useContext(CardValueContext)

    return context;
}