import Image from 'next/image';
import { useState, useContext, useEffect, useRef } from 'react'

import { PlayerContext } from '../../contexts/PlayerContext'
import { IEpisode } from '../../pages';

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import * as Styled from './styles'

export function Player() {  
  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying,  
    setIsPlaying,   
  } = useContext(PlayerContext)

  const [isEmpty, setIsEmpty] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null)
  
  const episode: IEpisode = episodeList[currentEpisodeIndex]   


  useEffect(() => {
    episode && setIsEmpty(false)

    if(!audioRef.current) return    

    isPlaying ? audioRef.current.play() : audioRef.current.pause() 

    const keyboardPlayPause = (event: KeyboardEvent) => {
      event.code === 'Space' && 
        isPlaying ? audioRef.current.pause() : audioRef.current.play()        
    }

    document.addEventListener('keydown', keyboardPlayPause)

    return () => document.removeEventListener('keydown', keyboardPlayPause)

  }, [episode, isPlaying])

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

        { episode && (
          <audio 
            src={episode.url} 
            ref={audioRef}
            autoPlay 
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)} 
          />
        )} 
 
        <Styled.PlayerControls>
          <Styled.Control type="button" disabled={isEmpty}>
            <img src="/shuffle.svg" alt="Ordem aleatória" />
          </Styled.Control>
          <Styled.Control type="button" disabled={isEmpty}>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </Styled.Control>
          <Styled.PlayControl type="button" disabled={isEmpty} onClick={() => setIsPlaying(!isPlaying)}>
            { isPlaying 
              ? <img src="/pause.svg" alt="Pausar" />
              : <img src="/play.svg" alt="Tocar" />
            }
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