import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --white: #FFF;

    --gray-50: #F7F8FA;
    --gray-100: #E6E8EB;
    --gray-200: #AFB2B1;
    --gray-500: #808080;
    --gray-800: #494D4B;
  
    --green-500: #04D361;
    
    --purple-300: #9F75FF;
    --purple-400: #9164FA; 
    --purple-500: #8257E5;
    --purple-800: #6F48C9;   

    --font-title: Lexend, sans-serif;
    --font-paragraph: Inter, sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;          
    box-sizing: border-box;    
  }

  body{
    background-color: var(--gray-50);
  }

  body,
  input,
  textarea,
  button{
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--font-paragraph);
    color: var(--gray-500);
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
    font-family: var(--font-title);
    color: var(--gray-800);
  }  

  h1{
    font-size: 2rem;    
  }

  h2{
    font-size: 1.5rem;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }  

  ul{
    list-style: none;
  }

  @media(max-wdith: 1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-wdith: 720px){
    html{
      font-size: 87.5%;
    }
  }
`
export default GlobalStyles