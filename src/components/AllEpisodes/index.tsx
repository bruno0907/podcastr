import Image from 'next/image'

import * as Styled from './styles'

import { IEpisode } from '../../pages'
import { ST } from 'next/dist/next-server/lib/utils'

interface IEpisodes{
  episodes: IEpisode[];
}

export const AllEpisodes = ({ episodes }: IEpisodes) => {
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
          {episodes.map((episode: IEpisode) => {
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
                  <a href="">{episode.title}</a>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button>
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