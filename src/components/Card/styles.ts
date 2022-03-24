import styled from 'styled-components';

interface IContainerProps {
    isChanged: boolean
}

export const Container = styled.div<IContainerProps>`
    height: 302px;
    width: 492px;
    border-radius: 1rem;
    margin-top: 31px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background: ${({ isChanged }) => isChanged ? 'var(--card-background-filled)' : 'var(--card-background-empty)'};
    color: var(--text-light);
    padding: 46px;


    @media (max-width: 1024px) {
        height: 302px;
        width: 492px;
    }

    @media (max-width: 768px) {
        height: 221px;
        width: 374px;
    }
    @media (max-width: 425px) {
        height: 172px;
        width: 280px;
        font-size: 18px;
    }

`;


export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 20px;

    p {
        margin-bottom: 38px;
        font-size: 26px;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h4 {
            font-size: 22px;
        }
    }

    @media (max-width: 768px) {
        p {
            font-size: 22px;
        }

        span > h4 {
            font-size: 18px;
        }
    }


    @media (max-width: 425px) {
        p {
            font-size: 14px;
            margin-bottom: 28px;
        }

        span > h4 {
            font-size: 12px;
        }
    }

`;
