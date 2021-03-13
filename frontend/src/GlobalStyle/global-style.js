import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    font-weight: 400;
    box-sizing: border-box;

    }

    a{
    text-decoration:none;
    color: #000;
} 
ul{
    list-style:none;
}
.error{
    color:red;
}
`;

export const theme = {
    //Colors
    backgroundColor: '#f3f3f3',
    backgroundColorLightGrey: 'rgba(255,255,255,0.9)',
    greyColor:'#c1c1c1', 
    pinkColor: '#058caa',
    whiteColor: '#fff',
    blueColor: '#66d6ef',
    blueLightColor: '#a3e6f5',
    // pinkColor: '#ef475b',
    
    //Box-shadow
    boxShadow: 'none',

    //Border-radius
    borderRadius:'10px',
    
    //Font Style
    fontFamily: '"Roboto", sans-serif',
};
