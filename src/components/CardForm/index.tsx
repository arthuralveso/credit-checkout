import React from 'react';
import { useForm } from 'react-hook-form';
import { useCardValue } from '../../hooks/CardValueContext';
import { Button, Form, Input } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


interface ICardInformation {
    cardNumber: string;
    ownerName: string;
    date: string;
    numberOfInstallments: string;
    cvv: string;
};

const schema = yup.object({
    cardNumber: yup.string().min(16, 'Número do cartão inválido').required('Número do cartão inválido'),
    ownerName: yup.string().max(15).required('Insira seu nome completo'),
    date: yup.string().min(4).required('Data inválida'),
    cvv: yup.number().min(3).positive().integer().required('Código inválido'),
    numberOfInstallments: yup.string().required(),
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
                <div>
                    <Input
                        {...register('date')}
                        placeholder='Validade'
                        maxLength={4}
                        onChange={event => handleToggleInput(event.target.value, 3)}
                        validationError={errors.date ? true : false}
                    />
                    <small>{errors.date?.message}</small>

                    <Input
                        {...register('cvv')}
                        placeholder='CVV'
                        maxLength={3}
                        type='text'
                        validationError={errors.cvv ? true : false}
                    />
                    <small>{errors.cvv?.message}</small>
                </div>

                <select
                    {...register('numberOfInstallments')}
                    placeholder='Numero de parcelas'
                    defaultValue={'1'}
                >
                    <option value="5">5x R$ 1.000,00 sem juros</option>
                    <option value="4">4x R$ 1.200,00 sem juros</option>
                    <option value="3">3x R$ 1.800,00 sem juros</option>
                    <option value="2">2x R$ 2.500,00 sem juros</option>
                    <option value="1">1x R$ 5.000,00 sem juros</option>
                </select>

                <Button type="submit">Continuar</Button>
            </Form>

        </>
    )

}
