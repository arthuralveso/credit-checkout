import React, { createContext, ReactNode, useContext, useState } from "react";

interface InputValueProps {
    children: ReactNode
}

interface IValue {
    numero: string;
    nome: string;
    vencimento: string;
    cvv: string;
}

interface InputValueContextData {
    value: IValue;
    handleToggleInput: (value: string, key: number) => void
}

export const InputValueContext = createContext<InputValueContextData>({} as InputValueContextData);


export function InputValueProvider({ children }: InputValueProps) {
    const [value, setValue] = useState<IValue>({
        numero: '**** **** **** ****',
        nome: 'NOME DO TITULAR',
        vencimento: '00/00',
    } as IValue)


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
        const valor = { ...value };

        valor.numero = newValue;

        setValue(valor)
    }

    function handleToggleNome(newValue: string) {
        const valor = { ...value };

        valor.nome = newValue.toUpperCase();

        setValue(valor)
    }

    function handleToggleVencimento(newValue: string) {
        const valor = { ...value };

        valor.vencimento = newValue;

        setValue(valor)
    }

    function handleToggleCVV(newValue: string) {
        const valor = { ...value };

        valor.cvv = newValue;

        setValue(valor)
    }


    return (
        <InputValueContext.Provider value={{ handleToggleInput, value }}>
            {children}
        </InputValueContext.Provider>
    )
}

export function useInputValue() {
    const context = useContext(InputValueContext)

    return context;
}