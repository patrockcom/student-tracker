import styled from "styled-components";


export const TableStyled = styled.section`
display:flex;
width:100vw;



.program-data{
  width:calc(100vw - 300px);
  margin:20px;
  padding:10px;
  .p-data{
    display:flex;
    justify-content:space-between;
    .pd1{
      h1{
        font-size:30px;
        padding:10px;
        font-weight:700;
      }
      h2{
        padding:10px;
        font-size:20px;
      }
      p{
        padding:0 10px;
        text-align:justify;
      }
    }
    .pd2{
      padding:10px;
      background-color:${props => props.theme.pinkColor};
    }
  }
  
}

h1{
  margin-top:20px;
}
p{
    max-width:700px;
    margin: 20px 0;
}
table{
   margin-top:20px;
   position: relative;

}
.wrapper{
  max-width: calc(100vh -400px);
  overflow-x: scroll;
}
table, th, td {
  border-bottom: 1px solid black;
  border-collapse: collapse;
}
tr:nth-child(even){
  background-color: #f2f2f2;
  }

tr:hover {
  background-color: #ddd;
  }

th, td {
  padding: 10px;
  text-align: left;
  white-space: nowrap;
}
th{
  font-weight:700;
  background-color: ${props => props.theme.pinkColor};

}
.th-blue{
  background-color:${props => props.theme.blueColor};
}
.table-header{
  position: sticky;
  left: -1px;
  text-align: left;
 

}
`