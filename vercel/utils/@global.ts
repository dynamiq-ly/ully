import { createGlobalStyle } from 'styled-components'

export const DesignSystem = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  html,
  body {  
    display:flex;
    max-width: 100%;
    font-weight: 400;
    min-height: 100vh;
    flex-direction: column;
    backface-visibility:hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.text.accent_100};
    background: ${({ theme }) => theme.colors.background.accent_200};
  }  
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    margin: 5px 5px;
    background-color: none
    
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: black;
  }
`
