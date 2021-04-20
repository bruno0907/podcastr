import { useState } from 'react'

import * as Styled from './styles'

export function Player() {
  const [isEmpty, setIsEmpty] = useState(true);

  return( 
    <Styled.Container>
      <Styled.Header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </Styled.Header>

      <Styled.Player>
        <strong>Selectione um podcast para ouvir</strong>
      </Styled.Player>

      <Styled.Footer empty={isEmpty}>
        <Styled.PlayerProgress>
          <span>00:00</span>
          <Styled.ProgressSlider>
            <Styled.EmptySlider />
            <Styled.CurrentProgressSlider />
          </Styled.ProgressSlider>
          <span>00:00</span>
        </Styled.PlayerProgress>     

        <Styled.PlayerControls>
          <Styled.Control type="button">
            <img src="/shuffle.svg" alt="Ordem aleatória" />
          </Styled.Control>
          <Styled.Control type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </Styled.Control>
          <Styled.PlayControl type="button">
            <img src="/play.svg" alt="Tocar" />
          </Styled.PlayControl>
          <Styled.Control type="button">
            <img src="/play-next.svg" alt="Tocar próxima" />
          </Styled.Control>
          <Styled.Control type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </Styled.Control>
        </Styled.PlayerControls>   
      </Styled.Footer>

    </Styled.Container>
  )
}