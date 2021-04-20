
import GlobalStyles from "./styles/global"
import * as Styled from './styles/app'

import { Header } from "../components/Header"
import { Player } from "../components/Player"

function MyApp({ Component, pageProps }) {
  return (    
    <Styled.Container>
    <GlobalStyles />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </Styled.Container>       
  )
}

export default MyApp
