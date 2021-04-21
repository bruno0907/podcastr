import Image from 'next/image'
import * as Styled from './styles'

import { IEpisode } from '../../pages'

interface IEpisodes{
  episodes: IEpisode[];
}

export const LatestEpisodes = ({ episodes }: IEpisodes) => {
  return(
    <Styled.Container>
      <Styled.Title>Últimos lançamentos</Styled.Title>

      <ul>
        {episodes.map((episode: IEpisode) => {
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
                <a href="">{episode.title}</a>
                <p>{episode.members}</p>
                <div>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </div>
              </Styled.EpisodeDetails>
              <Styled.EpisodePlayButton>
                <img src="/play-green.svg" alt="Ouvir episódio"/>
              </Styled.EpisodePlayButton>
            </Styled.Episode>
          )
        })}
      </ul>
    </Styled.Container>
  )
}