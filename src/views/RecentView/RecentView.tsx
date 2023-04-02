import { useContext } from 'react'

import { Grid } from '@/uis/Grid'
import { Card } from '@/components/Card'
import { MiniCard } from '@/components/MiniCard'
import { ResultTitle } from './recentView.styles'
import { SongContext } from '@/contexts/SongContext'

export const RecentView = () => {
  const { songs, songList } = useContext(SongContext)

  const music = songList.length > 0 ? songList[0] : ''

  return (
    <Grid container flexDirection='column'>
      <Grid xs={12} style={{ marginBottom: '40px' }}>
        <Card album={music.album} artist={music.artist} src={music.image} />
      </Grid>
      <Grid xs={12}>
        <ResultTitle>Resultados</ResultTitle>
        <Grid container $spacing={4}>
          {songs.length > 0 ? (
            songs.map(song => (
              <Grid key={song.id}>
                <MiniCard
                  src={song.album?.cover_medium}
                  title={song.title}
                  subtitle={song.artist?.name}
                  albumId={song.album?.id}
                />
              </Grid>
            ))
          ) : (
            <p>No hay canciones</p>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}
