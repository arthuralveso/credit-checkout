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

export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    input {
        width: 330px
    }
`

interface IInputProps {
    validationError: boolean
}

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



export const Input = styled.input<IInputProps>`
    outline: none;
	border: none;
    background-color: transparent;
    font-size: 16px;
    color: #3C3C3C;
    margin-top: 50px;
    

    width: 100%;
    border-bottom: 2px solid ${({ validationError }) => validationError ? '#EB5757' : '#C6C6C6'};

    
    &::placeholder {
    color: var(--input-color)
}
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
`;