import { createContext, useState } from 'react'

interface SongContextProps {
  songs: any[]
  setSongs: (songs: any[]) => void
  songList: any[]
  setSongList: (songList: any[]) => void
}

export const SongContext = createContext<SongContextProps>(
  {} as SongContextProps
)

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState<any[]>([])
  const [songList, setSongList] = useState<string[]>([])

  return (
    <SongContext.Provider value={{ songs, setSongs, songList, setSongList }}>
      {children}
    </SongContext.Provider>
  )
}
