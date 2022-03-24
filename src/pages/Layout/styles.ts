import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
`;
interface IHeaderSectionProps {
    hasImage: boolean
}


export const HeaderSection = styled.div<IHeaderSectionProps>`

    span {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
            div {
                margin-right: 8px;
            }
        }

        span > div {
            min-height: 20px;
            min-width: 20px;
            border-radius: 50%;
            background: ${({ hasImage }) => hasImage && '#4BDE95'};
            border: 1px solid #4BDE95;

            display: flex;
            align-items: center;
            justify-content: center;
        }
`;

export const LeftContainer = styled.div`
    height: 100vh;
    width: 325px;
    background: var(--primary);

    color: var(--text-light);

    padding: 50px 8px;

    span {
        display: flex;
        align-items: center;

        p { 
            font-size: 13px;
            margin-left: 11px;
        }
    }
`;

export const TitleSection = styled.div`
        display: flex;
        align-items: center;
        margin-top: 51px;
        height: 50px;

        div {
            min-height: 50px;
            min-width: 50px;
            border-radius: 50%;
            border: 2px solid var(--text-light);

            display: flex;
            align-items: center;
            justify-content: center;
            
        }

        img {
            width: 30px;
        }

        p { 
            font-size: 24px;
            margin-left: 28px;
        }
`;



export const RightContainer = styled.div`
       color: var(--primary); //TODO: VERIFICAR COR DO HEADER

       width: 50vw;
       
       header {
        
        display: flex;
        font-weight: 400;
        font-size: 20px;
        justify-content: space-between;
        padding: 46px 62px 0 0;
       }

   
`;


