import styled from 'styled-components';

export const FormCreateGradeStyle = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background-color: #f3f3f3;
padding: 30px 400px 200px 400px ;


.main-top-field {
    display: flex;
    flex-direction: column;
    min-width: 30%;
    min-height: 10vh; 
    align-items: center;
    justify-content: start;
    margin-bottom: 20px;
}

.rating {
   padding-left: 10px;
   color: #ef475b;
   font-size: 20px;
   font-weight: bold;
   margin-top: 20px;
   }

.input-field-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #E3E3E3;   
    min-width: 30%;
    min-height: 20%;
    background-color: white;
    padding: 10px 10px; 
} 

.create-grade-input {
    min-width: 50px;
    min-height: 20px;
    border: none;
    outline: none;
    padding: 10px;
}

.middle-button-container {
    display: flex;
    min-width: 50px;
    padding-top: 10px;
}

.grade-button {
    background: #66d6ef;
    border: none;
    border-radius: 28px;
    min-height: 40px;
    min-width: 200px;
    left: 0px;
    top: 0px;
    font-size: 14px;
    font-style: normal;
    outline: none;
    cursor: pointer; 
    color: white;
    margin-top: 20px;
}
`;