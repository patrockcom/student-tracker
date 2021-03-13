import styled from "styled-components";

export const UserCardStyled = styled.section`
width:400px;
background-color: ${props => props.theme.backgroundColor};
font-family:${props => props.theme.fontFamily}; 
padding:10px;
text-align:center;
box-shadow:${props => props.theme.boxShadow};
margin:10px;
border-radius:${props => props.theme.borderRadius};
img{
    width:100px;
    height:100px;
    border-radius:50%;
}
h1{
    font-size:20px;
    font-weight:700;
    font-family:${props => props.theme.fontFamily}; 
}
h2, h3{
    font-size:16px;
    font-weight:400; 
    margin:10px 0;
    font-family:${props => props.theme.fontFamily}; 
}
h3{
    font-weight:700;
}
p{
    text-align:justify;
    padding:0 10px;
}
.expertise-area{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    p{
        padding:5px;
        margin:5px;
        background-color:${props => props.theme.whiteColor}; 
        border-radius:3px;
    }
}
`
