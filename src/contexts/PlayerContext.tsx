import { createContext, ReactNode, useState, useContext, useRef,  } from 'react'

interface IPlayerContext{
  episodeList: IEpisode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;  
  isLooping: boolean;  
  isShuffling: boolean;  
  latestEpisodes: IEpisode[];
  allEpisodes: IEpisode[];
  setIsPlaying: (state: boolean) => void;
  play: (episode: IEpisode) => void;  
  togglePlay: () => void;
  playList: (list: IEpisode[], index: number) => void;    
  playNext: () => void;
  playPrevious: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  remainingEpisodes: IEpisode[];
  setLatestEpisodes: (episodes: IEpisode[]) => void;
  setAllEpisodes: (episodes: IEpisode[]) => void;
  setRemainingEpisodes: (episodes: IEpisode[]) => void;
  hasNext: boolean;
  hasPrevious: boolean;
  clearPlayerList: () => void;  
}

interface IPlayerProvider{
  children: ReactNode;
}

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

export const PlayerContext = createContext({} as IPlayerContext)

export const PlayerContextProvider = ({ children }: IPlayerProvider) => {
  const [latestEpisodes, setLatestEpisodes] = useState<IEpisode[]>([])
  const [remainingEpisodes, setRemainingEpisodes] = useState<IEpisode[]>([])
  const [allEpisodes, setAllEpisodes] = useState<IEpisode[]>([])

  const [episodeList, setEpidoseList] = useState<IEpisode[]>([]) 
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)  
  const [isPlaying, setIsPlaying] = useState(false)    
  const [isLooping, setIsLooping] = useState(false)    
  const [isShuffling, setIsShuffling] = useState(false)    

  const play = (episode: IEpisode) => {
    setEpidoseList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)      
  }

  const togglePlay = () => setIsPlaying(prevState => !prevState)

  const playList = (list: IEpisode[], index: number) => {
    setEpidoseList(list)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }  

  const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length
  const hasPrevious = currentEpisodeIndex > 0

  const playNext = () => {
    isShuffling ? setCurrentEpisodeIndex(Math.floor(Math.random() * episodeList.length))
    : hasNext ? setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    : null
  }

  const playPrevious = () => hasPrevious && setCurrentEpisodeIndex(currentEpisodeIndex - 1)

  const toggleLoop = () => setIsLooping(prevState => !prevState)
  const toggleShuffle = () => setIsShuffling(prevState => !prevState)

  const clearPlayerList = () => {
    setEpidoseList([])
    setCurrentEpisodeIndex(0)
  }  
  
  return(
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,      
      play,
      togglePlay,
      playNext,
      playPrevious,
      isPlaying,
      isLooping,
      isShuffling,
      toggleLoop,
      toggleShuffle,
      setIsPlaying,     
      playList,
      latestEpisodes, 
      remainingEpisodes,
      allEpisodes,       
      setLatestEpisodes, 
      setRemainingEpisodes,
      setAllEpisodes,   
      hasNext,
      hasPrevious,
      clearPlayerList,
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)