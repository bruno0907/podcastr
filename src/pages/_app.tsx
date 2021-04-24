import Head from 'next/head'
import GlobalStyles from "../styles/global"
import * as Styled from '../styles/app'

import { Header, Player } from '../components'
import { PlayerContextProvider } from "../contexts/PlayerContext"

function MyApp({ Component, pageProps }) {
  return (    
    <PlayerContextProvider>
      <GlobalStyles />
      <Head>
        <title>Podcastr | O melhor para você ouvir, sempre</title>
      </Head>
      <Styled.Container>
        <main>
          <Header />
            <Component {...pageProps} />
          </main>
          <Player />
      </Styled.Container>       
    </PlayerContextProvider>
  )
}

export default MyApp
