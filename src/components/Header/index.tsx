import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

import * as Styles from './styles'

export function Header(){
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBr
  })


  return(
    <Styles.Container>
      <img src="/logo.svg" alt="Podcastr" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </Styles.Container>
  )
}