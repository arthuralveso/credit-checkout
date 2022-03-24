import styled from 'styled-components';

export const Container = styled.div`
    height: 302px;
    width: 492px;
    border-radius: 1rem;
    margin-top: 31px;

    background: var(--card-background);
    color: var(--text-light);
    font-size: 22px;
    padding: 46px;

    div {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`;
export const CardInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
        padding-bottom: 38px;
        font-size: 26px;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;
