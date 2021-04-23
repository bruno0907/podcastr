import { createContext, ReactNode, useState } from 'react'

import { IEpisode } from '../pages/index'

interface IPlayerContext{
  episodeList: IEpisode | IEpisode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;    
  setIsPlaying: (state: boolean) => void;
  play: (episode: IEpisode) => void;    
}

interface IPlayerProvider{
  children: ReactNode;
}

export const PlayerContext = createContext({} as IPlayerContext)

export const PlayerProvider = ({ children }: IPlayerProvider) => {  
  const [episodeList, setEpidoseList] = useState([]) 
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)  
  const [isPlaying, setIsPlaying] = useState(false)

  const play = (episode: IEpisode | IEpisode[]) => {
    setEpidoseList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)      
  }
  
  return(
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,      
      play,
      isPlaying,
      setIsPlaying,         
    }}>
      {children}
    </PlayerContext.Provider>
  )
}