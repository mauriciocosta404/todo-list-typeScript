import { createGlobalStyle } from "styled-components";


 const GlobalStyle=createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color:#121214
}
`;

export default GlobalStyle;