import ReactAudioPlayer from 'react-h5-audio-player'
import { MusicControllerProps } from './musicController.interface'
import { FooterContainer, MusicInfo } from './musicController.styles'
import 'react-h5-audio-player/lib/styles.css'
import { Grid } from '@/uis/Grid'
import Image from 'next/image'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { SongContext } from '@/contexts/SongContext'

export const MusicController: React.FC<MusicControllerProps> = () => {
  const theme = useTheme()
  const { songList } = useContext(SongContext)

  const music = songList.length > 0 ? songList[0] : ''

  return (
    <FooterContainer>
      <Grid container>
        <Grid
          xs={4}
          sm2={5}
          $display='flex'
          alignItems='center'
          style={{ backgroundColor: theme.palette.primary.main, gap: '20px' }}
        >
          <Image
            src={music.image || 'https://picsum.photos/100'}
            alt='avata'
            width={100}
            height={100}
          />
          <MusicInfo>
            <b>{music.titleShort || 'Canción'}</b>
            <p>
              {music.artist || 'Artista'} - {music.album || 'Álbum'}
            </p>
          </MusicInfo>
        </Grid>
        <Grid xs={8} sm2={7}>
          <ReactAudioPlayer autoPlay src={music.preview} />
        </Grid>
      </Grid>
    </FooterContainer>
  )
}
