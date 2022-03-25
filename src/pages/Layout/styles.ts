import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1250px;
    margin: 0 auto;

    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
    }
    
`;

export const LeftWrap = styled.div`
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


    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 264px;
        width: 425px;
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

        @media (max-width: 425px) {
            width: 286px;
            }
`;

interface IPurchaseStepsProps {
    hasImage: boolean
}


export const PurchaseSteps = styled.div<IPurchaseStepsProps>`

    span {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            div {
                margin-right: 8px;
            }
        }

        span > div {
            min-height: 30px;
            min-width: 30px;
            border-radius: 50%;
            background: ${({ hasImage }) => hasImage && '#4BDE95'};
            border: 1px solid #4BDE95;

            display: flex;
            align-items: center;
            justify-content: center;
        }


`;



export const RightWrap = styled.div`
       color: var(--primary);
       width: 700px;

       
       header {
        display: flex;
        font-weight: 400;
        font-size: 20px;
        justify-content: space-between;
        padding: 46px 62px 0 0;
       }



        @media (max-width: 1024px) {
            width: 500px;

            header {
                font-size: 16px;
            }

            span > div {
                min-height: 20px;
                min-width: 20px;
            }
        }

        @media (max-width: 768px) {
            width: 360px;

            header {
                font-size: 14px;
                padding: 46px 30px 0 0;
            }

            span > div {
                min-height: 18px;
                min-width: 18px;
            }
        }

        @media (max-width: 425px) {
            width: 290px;
            padding-top: 50px;

            header {
                display: none;
            }

            span > div {
                min-height: 18px;
                min-width: 18px;
            }
        }

   
`;


