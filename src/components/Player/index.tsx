import Image from 'next/image';
import { useState, useContext, useEffect } from 'react'

import { PlayerContext } from '../../contexts/PlayerContext'
import { IEpisode } from '../../pages';

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import * as Styled from './styles'

export function Player() {  
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext)
  const [isEmpty, setIsEmpty] = useState(true);
  
  const episode: IEpisode = episodeList[currentEpisodeIndex]  
  
  useEffect(() => {
    episode && setIsEmpty(false)

    console.log(isEmpty)
  }, [episode])

  return( 
    <Styled.Container>
      <Styled.Header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </Styled.Header>

      { !episode ? (
        <Styled.PlayerWithNoEpisode>
          <strong>Selecione ao lado um podcast para ouvir</strong>
        </Styled.PlayerWithNoEpisode> ) : (
        <Styled.PlayerWithEpisode>
          <Image
            src={episode.thumbnail}
            width={592}
            height={592}
            objectFit="cover"
            loading="lazy"
          />
          <h4>{episode.title}</h4>
          <p>{episode.members}</p>
        </Styled.PlayerWithEpisode>

      )}

      <Styled.Footer empty={isEmpty}>
        <Styled.PlayerProgress>
          <span>00:00</span>
          <Styled.ProgressSlider>
            { episode ? (
              <Slider 
                trackStyle={{ backgroundColor: '#04d361'}}
                railStyle={{ backgroundColor: '#9f75ff'}}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4}}
              />
            ) : (
              <Styled.EmptySlider />            
            )}
          </Styled.ProgressSlider>
          <span>{episode?.durationAsString || '00:00'}</span>
        </Styled.PlayerProgress>     

        <Styled.PlayerControls>
          <Styled.Control type="button" disabled={isEmpty}>
            <img src="/shuffle.svg" alt="Ordem aleatória" />
          </Styled.Control>
          <Styled.Control type="button" disabled={isEmpty}>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </Styled.Control>
          <Styled.PlayControl type="button" disabled={isEmpty}>
            <img src="/play.svg" alt="Tocar" />
          </Styled.PlayControl>
          <Styled.Control type="button" disabled={isEmpty}>
            <img src="/play-next.svg" alt="Tocar próxima" />
          </Styled.Control>
          <Styled.Control type="button" disabled={isEmpty}>
            <img src="/repeat.svg" alt="Repetir" />
          </Styled.Control>
        </Styled.PlayerControls>   
      </Styled.Footer>

    </Styled.Container>
  )
}