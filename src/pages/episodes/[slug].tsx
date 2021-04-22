import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from '../../services/api'

import { convertDurationToTimeString } from '../../utils'

import * as Styled from '../../styles/episodes'

import { IEpisode } from '../index'

interface IEpisodePage{
  episode: IEpisode;
}

export default function Episode({ episode }: IEpisodePage){
  return(
    <Styled.Container>
      <Styled.Thumbnail>
        <Link href="/">
          <button>
            <img src="/arrow-left.svg" alt="Voltar"/>          
          </button>
        </Link>
        <Image 
          src={episode.thumbnail} 
          width={700}
          height={160}
          objectFit="cover"
          loading="lazy"
        />
        <button>
          <img src="/play.svg" alt="Ouvir episódio"/>          
        </button>
      </Styled.Thumbnail>

      <Styled.Header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </Styled.Header>

      <Styled.Description dangerouslySetInnerHTML={{ __html: episode.description}} />
    </Styled.Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map(episode => {
    return {
      params: {
        slug: episode.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params

  const in24hours = 60 * 60 * 24

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {    
    id: data.id,
    title: data.title,
    description: data.description,
    members: data.members,
    thumbnail: data.thumbnail,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
    url: data.file.url,
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),    
  }

  return {
    props: {
      episode
    },
    revalidate: in24hours
  }
}