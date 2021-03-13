import styled from "styled-components";

export const LectureProfileCardStyled = styled.section`
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
h2 {
    font-size:16px;
    font-weight:400; 
    margin:10px 0;
    font-family:${props => props.theme.fontFamily}; 
}
p{
    text-align:justify;
    padding:0 10px;  
}
.admin-profile{
    text-align:center;
    
    img{
        width:200px;
        border-radius:${props => props.theme.borderRadius};
    }
    h1{
        font-size:20px;
        font-weight:700;
        font-family:${props => props.theme.fontFamily};
        margin-top:10px;
    }
    h2{
        font-size:16px;
        font-family:${props => props.theme.fontFamily};
        margin:5px;
    }
    .user-info{
        text-align:left;
        padding:20px;
        h2{
            span{
                font-weight:700;
            }
        }
        h3{
            padding: 10px 0;
            font-weight:700;
            font-size:18px;
        }
        p{
           text-align:justify;
           height:110px;
        }
    }
    .edit-delete{
        margin:10px;
        margin-top:0;
        button{
            margin:10px;
            outline:none;
            border:none;
            cursor:pointer;
            .d{
                color:red;
            }
        }
    }
}
`