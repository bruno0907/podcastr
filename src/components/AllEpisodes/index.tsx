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

export const AllEpisodes = () => {
  const { playList, allEpisodes, latestEpisodes, remainingEpisodes } = usePlayer()
  
  return(
    <Styled.Container>
      <Styled.Title>Lista de episódios</Styled.Title>
      <Styled.EpisodesList cellSpacing={0}>
        <thead>
          <tr>
            <th></th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {remainingEpisodes.map((episode: IEpisode, index: number) => {
            return(
              <tr key={episode.id}>
                <td style={{ width: 100 }}>
                  <Image
                    src={episode.thumbnail}
                    alt={episode.title}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </td>
                <td>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button onClick={() => playList(allEpisodes, index + latestEpisodes.length)}>
                    <img src="/play-green.svg" alt="Ouvir episódio"/>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Styled.EpisodesList>
    </Styled.Container> 
  )
}