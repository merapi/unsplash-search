import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap&subset=latin-ext');
  
  * {
    font-family: Inconsolata;
    font-size: 20px;
  }
  body {
    margin: 0;
    background: #282c34;
    color: #efefef;
  }
`

export default GlobalStyles