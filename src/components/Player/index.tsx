import Image from 'next/image';
import { useState, useEffect, useRef } from 'react'

import { usePlayer } from '../../contexts/PlayerContext'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import * as Styled from './styles'
import { convertDurationToTimeString } from '../../utils';

interface IEpisode{    
  title: string;  
  members: string;
  thumbnail: string;  
  duration: number;
  durationAsString: string;
  url: string;
}

export function Player() {  
  const { 
    episodeList, 
    currentEpisodeIndex, 
    isPlaying,  
    setIsPlaying,   
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    isLooping,
    isShuffling,
    toggleLoop,
    toggleShuffle,
    clearPlayerList,    
  } = usePlayer()

  const [isEmpty, setIsEmpty] = useState(true);
  const [episodeProgress, setEpisodeProgress] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)  
  
  const episode: IEpisode = episodeList[currentEpisodeIndex]     

  const setupProgressListener = () => {
    audioRef.current.currentTime = 0
    
    const updateEpisodeCurrentTime = () => setEpisodeProgress(audioRef.current.currentTime)
    audioRef.current.addEventListener('timeupdate', updateEpisodeCurrentTime)
  }

  const handleEpisodeDurationSeek = (duration: number) => {
    audioRef.current.currentTime = duration
    setEpisodeProgress(duration)
  }

  const handlePlayNextEpisodeOnEnd = () => !hasNext ? clearPlayerList() : playNext()

  useEffect(() => {
    episode ? setIsEmpty(false) : setIsEmpty(true)

  }, [episode])

  useEffect(() => {
    if(!audioRef.current) return    

    isPlaying ? audioRef.current.play() : audioRef.current.pause() 

    const keyboardPlayPause = (event: KeyboardEvent) => {
      event.code === 'Space' && 
        isPlaying ? audioRef.current.pause() : audioRef.current.play()        
    }

    document.addEventListener('keydown', keyboardPlayPause)

    return () => document.removeEventListener('keydown', keyboardPlayPause)

  }, [isPlaying])

  return( 
    <Styled.Container>
      <Styled.Header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </Styled.Header>      

      { !episode && (
        <Styled.PlayerWithNoEpisode>
          <strong>Selecione ao lado um podcast para ouvir</strong>
        </Styled.PlayerWithNoEpisode> )} 
        
      { episode && (
        <>
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

          <audio 
            src={episode.url} 
            ref={audioRef}
            autoPlay 
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)} 
            onEnded={handlePlayNextEpisodeOnEnd}            
            loop={isLooping}
            onLoadedMetadata={setupProgressListener}
          />

        </>      
      )}

      <Styled.Footer isEmpty={isEmpty}>
        <Styled.PlayerProgress>
        <span>{convertDurationToTimeString(episodeProgress)}</span>
          <Styled.ProgressSlider>
            { episode ? (
              <Slider 
                trackStyle={{ backgroundColor: '#04d361'}}
                railStyle={{ backgroundColor: '#9f75ff'}}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4}}
                max={episode.duration}
                value={episodeProgress}
                onChange={handleEpisodeDurationSeek}
              />
            ) : (
              <Styled.EmptySlider />            
            )}
          </Styled.ProgressSlider>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Styled.PlayerProgress>
        <Styled.PlayerControlButtons>
          <Styled.ControlButton  
            disabled={isEmpty || Array.from(episodeList as IEpisode[]).length === 1} 
            isActive={isShuffling || Array.from(episodeList as IEpisode[]).length > 1} 
            onClick={() => toggleShuffle()}
          >
            <img src="/shuffle.svg" alt="Ordem aleatória" />
          </Styled.ControlButton>
          <Styled.ControlButton 
            disabled={isEmpty || !hasPrevious} 
            onClick={() => 
            playPrevious()}
          >
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </Styled.ControlButton>
          <Styled.ControlPlayButton 
            disabled={isEmpty} 
            onClick={() => 
            setIsPlaying(!isPlaying)}
          >
            { isPlaying 
              ? <img src="/pause.svg" alt="Pausar" />
              : <img src="/play.svg" alt="Tocar" />
            }
          </Styled.ControlPlayButton>
          <Styled.ControlButton 
            disabled={isEmpty || !hasNext} 
            onClick={() => playNext()}
          >
            <img src="/play-next.svg" alt="Tocar próxima" />
          </Styled.ControlButton>
          <Styled.ControlButton 
            disabled={isEmpty} 
            isActive={isLooping} 
            onClick={() => toggleLoop()}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </Styled.ControlButton>
        </Styled.PlayerControlButtons>   
      </Styled.Footer>

    </Styled.Container>
  )
}
