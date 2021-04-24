import Image from 'next/image'
import Link from 'next/link'

import * as Styled from './styles'

import { usePlayer } from '../../contexts/PlayerContext'

interface IEpisode{  
  id: string;  
  title: string;  
  members: string;
  thumbnail: string;
  publishedAt: string;    
  durationAsString: string;
}

export const LatestEpisodes = () => {
  const { playList, latestEpisodes, allEpisodes } = usePlayer()
  return(
    <Styled.Container>
      <Styled.Title>Últimos lançamentos</Styled.Title>

      <ul>
        {latestEpisodes.map((episode: IEpisode, index: number) => {
          return(
            <Styled.Episode key={episode.id}>
              <div>
                <Image 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  width={192}
                  height={192}
                  objectFit="cover"                
                  loading="lazy"                
                />
              </div>
              <Styled.EpisodeDetails>
                <Link href={`/episodes/${episode.id}`}>
                  <a>{episode.title}</a>
                </Link>
                <p>{episode.members}</p>
                <div>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>
              </Styled.EpisodeDetails>
              <Styled.EpisodePlayButton onClick={() => playList(allEpisodes, index)}>
                <img src="/play-green.svg" alt="Ouvir episódio"/>
              </Styled.EpisodePlayButton>
            </Styled.Episode>
          )
        })}
      </ul>
    </Styled.Container>
  )
}