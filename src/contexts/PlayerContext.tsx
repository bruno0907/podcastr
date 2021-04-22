import { createContext, ReactNode, useState } from 'react'

import { IEpisode } from '../pages/index'

interface IPlayerContext{
  episodeList: IEpisode | IEpisode[];
  currentEpisodeIndex: number;
  play: (episode: IEpisode) => void;
}

interface IPlayerProvider{
  children: ReactNode;
}

export const PlayerContext = createContext({} as IPlayerContext)

export const PlayerProvider = ({ children }: IPlayerProvider) => {  
  const [episodeList, setEpidoseList] = useState([]) 
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)  

  const play = (episode: IEpisode | IEpisode[]) => {
    setEpidoseList([episode])
    setCurrentEpisodeIndex(0)    
  }
  
  return(
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      play
    }}>
      {children}
    </PlayerContext.Provider>
  )
}