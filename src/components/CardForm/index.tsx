import { yupResolver } from '@hookform/resolvers/yup';
import React, { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { useCardValue } from '../../hooks/CardValueContext';
import { Button, Form, Input, InputWrapper, Select, Wrapper } from './styles';

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
    const { handleToggleInput } = useCardValue();
    const [cardNumber, setCardNumber] = useState('');
    const [owner, setOwner] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');

    function onSubmit(data: ICardInformation) {
        console.log(data);
        reset();
    }



    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Wrapper>
                    <Input
                        {...register('cardNumber')}
                        name='cardNumber'
                        type="text"
                        maxLength={16}
                        value={cardNumber}
                        onChange={event => [handleToggleInput(event.target.value, 1), setCardNumber(event.target.value)]}
                        validationError={errors.cardNumber ? true : false}
                    />
                    <label className={cardNumber && 'filled'} htmlFor='cardNumber' >Numero do cartão</label>
                    <small>{errors.cardNumber?.message}</small>
                </Wrapper>

                <Wrapper>
                    <Input
                        {...register('ownerName')}
                        maxLength={15}
                        minLength={2}
                        onChange={event => [handleToggleInput(event.target.value, 2), setOwner(event.target.value)]}
                        validationError={errors.ownerName ? true : false}
                    />
                    <label className={owner && 'filled'} htmlFor='ownerName' >Nome igual ao cartão</label>
                    <small>{errors.ownerName?.message}</small>
                </Wrapper>

                <InputWrapper>

                    <Wrapper>
                        <Input
                            {...register('date')}
                            maxLength={5}
                            onChange={event => [handleToggleInput(event.target.value, 3), setDate(event.target.value)]}
                            validationError={errors.date ? true : false}
                        />
                        <label className={date && 'filled'} htmlFor='date' >Validade</label>
                        <small>{errors.date?.message}</small>
                    </Wrapper>


                    <Wrapper>
                        <Input
                            {...register('cvv')}
                            maxLength={3}
                            type='number'
                            validationError={errors.cvv ? true : false}
                            onChange={event => setCvv(event.target.value)}
                        />
                        <label className={cvv && 'filled'} htmlFor='cvv' >CVV</label>
                        <small>{errors.cvv?.message}</small>
                    </Wrapper>
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
