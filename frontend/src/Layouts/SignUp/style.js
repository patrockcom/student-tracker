import styled from 'styled-components';


export const Layout = styled.div`
   width: 100%;
   display: flex;
   height: 100vh;
   flex-direction: column;
`;


export const MainStyled = styled.main`
   width: 100%;
   flex: 1;
   display: flex;
   justify-content:center;
   align-items: flex-start;
`;


export const FormStyled = styled.form`
   min-width: 40%;
   max-width: 750px;
   min-height: 40%;
   margin-top: 150px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color:${props => props.theme.backgroundColor};
   box-shadow: ${props => props.theme.boxShadow};

     .email-icon {
        display: flex;
        background-color: white;
        padding-left: 5px;
        justify-content: space-aroud;
     }
`;


export const TitleStyled = styled.h1`
   height: 40px;
   margin-top: 20px; 
   margin-bottom: 70px;
   padding: 0 10px;
   font-size: 23px;
   font-weight: bold;
   
`;


export const InputStyled = styled.input`
   outline: none;
   border:  none;
   min-width: 50%;
   height: 40px;
   margin: 8px 0;
   padding: 0 15px;
   font-weight: bold;
   /* border-bottom: solid 1px #f3f3f3 */
`;


export const ButtonStyled = styled.button`
   outline: none;
   border: none;
   cursor: pointer;

   width: 27%;
   min-width: 100px;
   height: 40px;
   margin-top: 25px;
   margin-bottom: 40px;
   color: white;
   background-color:${props => props.theme.pinkColor};
   border-radius: 10px;
   
`;


export const SignupFormTwoStyled = styled.div`
    p {
        width: 80%;
        max-width: 525px;
        text-align: center;
        white-space: pre-line;
        line-height: 23px;
    }
`;


export const SignupFormThreeStyled = styled.div`
    .input-field {
        display: flex;
        justify-content:center;
        flex-wrap:wrap;
    }
`;


export const InputSmallStyled = styled.div`
      min-width: 40%;
      margin: 8px 12px
`;

