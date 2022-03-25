import styled from 'styled-components';

export const Form = styled.form`
margin-top: 50px;
display: flex;
flex-direction: column;
padding-right: 5px;


small {
    color: var(--danger);
}

`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    label {
        color: var(--input-color);
        position: absolute;
        pointer-events: none;
        transform: translate(0, 50px) scale(1);
        transform-origin: top left;
        transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        font-size: 16px;
        line-height: 1;
    }

    &:focus-within label {
        transform: translate(0, 30px) scale(0.75);
    }
    .filled {
        transform: translate(0, 30px) scale(0.75);
    }
`;


export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    input {
        width: 330px
    }

    @media (max-width: 1024px) {
        input {
            width: 230px
        }
    }

    @media (max-width: 768px) {
        input {
            width: 167px;
        }
    }

    @media (max-width: 425px) {
        input {
            width: 133px;
        }
    }
`

interface IInputProps {
    validationError: boolean
}

export const Input = styled.input<IInputProps>`
    outline: none;
	border: none;
    background-color: transparent;
    font-size: 16px;
    color: #3C3C3C;
    margin-top: 50px;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    

    width: 100%;
    border-bottom: 2px solid ${({ validationError }) => validationError ? '#EB5757' : '#C6C6C6'};

    
    &::placeholder {
    color: var(--input-color)
}
`;



export const Select = styled.select<IInputProps>`
    outline: none;
	border: none;
    background-color: transparent;
    font-size: 16px;
    color: #3C3C3C;
    margin-top: 50px;
    width: 100%;
    border-bottom: 2px solid ${({ validationError }) => validationError ? '#EB5757' : '#C6C6C6'};
`;

export const Button = styled.button`
	border: none;
    background-color: var(--confirm-button);
    font-size: 16px;
    color: var(--text-light);
    margin-top: 50px;
    border-radius: 4px;
    padding: 15px;

    align-self: flex-end;
    
    width: 150px;
    height: 50px;

    color: var(--text-light);

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 425px) {
        align-self: center;

    }
`;