import styled from "styled-components";

export const MainGradesStyle = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  
  .filter-grades {
       display:flex;
       padding: 5px;
       width: 90%;
       align-items: center;
       justify-content: space-around;
  
  .logo-header { 
        margin-right: 20%
  }
  .button-grade-me {
        background: #66d6ef;
        color: #FFF;
        border: none;
        border-radius: 28px;
        height: 40px;
        width: 200px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-style: normal;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        margin-top: 5px;
        margin-left: 70%;  
  }

  }
  .grades-card-container {
      display: flex;
      width: 90%;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
      
  }
`;

