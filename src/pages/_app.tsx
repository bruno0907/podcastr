
import GlobalStyles from "../styles/global"
import * as Styled from '../styles/app'

import { Header, Player } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Styled.Container>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </Styled.Container>       
    </>    
  )
}

export default MyApp
