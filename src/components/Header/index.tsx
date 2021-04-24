import Link from 'next/link'
import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

import * as Styled from './styles'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBr
  })

  return(
    <Styled.Container>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Podcastr" />
        </a>
      </Link>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </Styled.Container>
  )
}