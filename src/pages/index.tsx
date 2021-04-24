import { useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { GetStaticProps } from 'next'
import { api } from '../services/api'

import { convertDurationToTimeString } from '../utils'

import * as Styled from '../styles/home'
import { LatestEpisodes, AllEpisodes } from '../components'
import { usePlayer } from '../contexts/PlayerContext'

interface IEpisode{  
  id: string;  
  title: string;
  description: string;
  members: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
  duration: number;
  durationAsString: string;
}

interface IHome{
  latestEpisodes: IEpisode[];
  remainingEpisodes: IEpisode[];
  allEpisodes: IEpisode[];
}

export default function Home({ latestEpisodes, remainingEpisodes, allEpisodes }: IHome) {  
  const { 
    setLatestEpisodes, 
    setRemainingEpisodes, 
    setAllEpisodes, 
  } = usePlayer()  

  useEffect(() => {
    setLatestEpisodes(latestEpisodes)
    setRemainingEpisodes(remainingEpisodes)
    setAllEpisodes(allEpisodes)    

  }, [])

  return (
    <Styled.Container>      
      <LatestEpisodes />
      <AllEpisodes />      
    </Styled.Container>
  )
}

export const getStaticProps: GetStaticProps = async () =>{  
  const limit = 12
  const sortType = 'published_at'
  const sortOrder = 'desc'

  const { data } = await api.get('episodes', {
    params: {
      _limit: limit,
      _sort: sortType,
      _order: sortOrder
    }
  })

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      description: episode.description,
      members: episode.members,
      thumbnail: episode.thumbnail,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      url: episode.file.url,
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const remainingEpisodes = episodes.slice(2, episodes.length)
  const allEpisodes = [...latestEpisodes, ...remainingEpisodes]

  return {
    props: {
      latestEpisodes,
      remainingEpisodes,
      allEpisodes
    },

    revalidate: 60 * 60 * 8,
  }
}