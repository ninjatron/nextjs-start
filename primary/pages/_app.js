import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px; 
    font-family: Helvetica;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey; 
    border-radius: 3px;
    width: 3px;
    height: 3px;
  }
   
  ::-webkit-scrollbar-thumb {
    background: #ccc; 
    border-radius: 3px;
    width: 30px;
  }
`
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}