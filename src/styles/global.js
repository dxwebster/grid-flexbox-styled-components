import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html, body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

aside,
header,
footer,
article,
span {
  padding: 10px;
}

`;
