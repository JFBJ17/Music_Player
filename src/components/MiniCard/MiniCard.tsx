import Image from 'next/image'
import { useContext } from 'react'
import { FaPlay } from 'react-icons/fa'

import { Grid } from '@/uis/Grid'
import { DEZEER_API } from '@/libs/request'
import { PlayContainer } from '../Card/card.styles'
import { MiniCardProps } from './miniCard.interface'
import { SongContext } from '@/contexts/SongContext'
import { MiniCardSubtitle, MiniCardTitle } from './miniCard.styles'

export const MiniCard: React.FC<MiniCardProps> = ({
  subtitle,
  title,
  src,
  albumId
}) => {
  const { setSongList } = useContext(SongContext)

  const handleClick = async () => {
    try {
      const res = await DEZEER_API.get(`album/${albumId}`)
      if (!res.data) return
      const songInfo = res.data?.tracks?.data?.map(track => ({
        titleShort: track.title_short,
        preview: track.preview,
        image: track.album?.cover_medium,
        artist: track.artist?.name,
        album: track.album?.title
      }))
      setSongList(songInfo)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Grid container style={{ width: '160px' }} rowSpacing={1}>
      <Grid xs={12} style={{ position: 'relative' }}>
        <Image src={src} alt='minicard' height={160} width={160} />
        <PlayContainer size={32} onClick={handleClick}>
          <FaPlay />
        </PlayContainer>
      </Grid>
      <Grid xs={12}>
        <MiniCardTitle>{title}</MiniCardTitle>
        <MiniCardSubtitle>{subtitle}</MiniCardSubtitle>
      </Grid>
    </Grid>
  )
}
