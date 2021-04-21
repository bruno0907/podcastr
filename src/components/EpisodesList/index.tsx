import * as Styled from './styles'

import { IEpisode } from '../../pages'

interface IEpisodes{
  episodes: IEpisode[];
}

export const EpisodesList = ({ episodes }: IEpisodes) => {
  return(
    <Styled.Container>
      <h2>Lista de episódios</h2>
      <ul>
        {episodes.map((episode: IEpisode) => {
          return(
            <li key={episode.id}>
              <img src={episode.thumbnail} alt={episode.title}/>
              <div>
                <a href="">{episode.title}</a>
                <p>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </div>
              <button>
                <img src="/play-green.svg" alt="Ouvir episódio"/>
              </button>
            </li>
          )
        })}
      </ul>
    </Styled.Container> 
  )
}