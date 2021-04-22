import GlobalStyles from "../styles/global"
import * as Styled from '../styles/app'

import { Header, Player } from '../components'
import { PlayerProvider } from "../contexts/PlayerContext"

function MyApp({ Component, pageProps }) {
  return (    
    <PlayerProvider>
      <GlobalStyles />
      <Styled.Container>
        <main>
          <Header />
            <Component {...pageProps} />
          </main>
          <Player />
      </Styled.Container>       
    </PlayerProvider>
  )
}

export default MyApp
