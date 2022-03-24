import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { useCardValue } from '../../hooks/CardValueContext';
import { Button, Form, Input, InputWrapper, Select } from './styles';

export interface ICardInformation {
    cardNumber: number;
    ownerName: string;
    date: string;
    numberOfInstallments: string;
    cvv: number;
};

const schema = yup.object({
    cardNumber: yup.string().min(16, 'Número do cartão inválido').required('Número do cartão inválido'),
    ownerName: yup.string().max(15).required('Insira seu nome completo'),
    date: yup.string().min(5, 'Data inválida').required('Data inválida'),
    cvv: yup.string().min(3, 'Código inválido').required('Código inválido'),
    numberOfInstallments: yup.string().required('Insira o número de parcelas'),
}).required();

export function CardForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICardInformation>({
        resolver: yupResolver(schema)
    });
    const { handleToggleInput } = useCardValue()

    function onSubmit(data: ICardInformation) {
        console.log(data);
        reset();
    }


    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Input
                    {...register('cardNumber')}
                    placeholder='Numero do cartão'
                    type="text"
                    maxLength={16}
                    onChange={event => handleToggleInput(event.target.value, 1)}
                    validationError={errors.cardNumber ? true : false}
                />
                <small>{errors.cardNumber?.message}</small>
                <Input
                    {...register('ownerName')}
                    placeholder='Nome igual ao cartão'
                    maxLength={15}
                    minLength={2}
                    onChange={event => handleToggleInput(event.target.value, 2)}
                    validationError={errors.ownerName ? true : false}
                />
                <small>{errors.ownerName?.message}</small>
                <InputWrapper>
                    <div>
                        <Input
                            {...register('date')}
                            placeholder='Validade'
                            maxLength={5}
                            onChange={event => handleToggleInput(event.target.value, 3)}
                            validationError={errors.date ? true : false}
                        />
                        <small>{errors.date?.message}</small>
                    </div>

                    <div>
                        <Input
                            {...register('cvv')}
                            placeholder='CVV'
                            maxLength={3}
                            type='number'
                            validationError={errors.cvv ? true : false}
                        />
                        <small>{errors.cvv?.message}</small>
                    </div>
                </InputWrapper>

                <Select
                    {...register('numberOfInstallments')}
                    placeholder='Numero de parcelas'
                    validationError={errors.numberOfInstallments ? true : false}
                >
                    <option value="" disabled selected>Numero de parcelas</option>
                    <option value="5">5x R$ 1.000,00 sem juros</option>
                    <option value="4">4x R$ 1.200,00 sem juros</option>
                    <option value="3">3x R$ 1.800,00 sem juros</option>
                    <option value="2">2x R$ 2.500,00 sem juros</option>
                    <option value="1">1x R$ 5.000,00 sem juros</option>
                </Select>
                <small>{errors.numberOfInstallments?.message}</small>

                <Button type="submit">Continuar</Button>
            </Form>

        </>
    )

}
