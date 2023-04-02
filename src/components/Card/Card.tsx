import { FaPlay } from 'react-icons/fa'

import { Grid } from '@/uis/Grid'
import { Button } from '@/uis/Button'
import { CardProps } from './card.interface'
import {
  CardDescription,
  CardInfo,
  CardSubtitle,
  CardTitle,
  Followers,
  ImageCard,
  PlayContainer
} from './card.styles'

export const Card: React.FC<CardProps> = ({ album, artist, src }) => {
  return (
    <Grid container style={{ height: 'auto', minHeight: '250px' }}>
      <Grid xs={12} sm2={4} style={{ position: 'relative' }}>
        <ImageCard
          src={src || 'https://picsum.photos/250'}
          alt='image'
          width={250}
          height={250}
        />
        <PlayContainer size={72}>
          <FaPlay />
        </PlayContainer>
      </Grid>
      <Grid xs={12} sm2={8}>
        <CardInfo>
          <Grid container style={{ height: '100%' }}>
            <Grid xs={12}>
              <CardTitle>
                {artist || 'Artista'} {album || 'Álbum'}
              </CardTitle>
            </Grid>
            <Grid
              $display={{ xs: 'none', sm2: 'inline-flex' }}
              alignItems='center'
              style={{ gap: '16px' }}
            >
              <CardSubtitle>Lo mejor de Adele</CardSubtitle>
              <Followers>321, 123 seguidores</Followers>
            </Grid>
            <Grid xs={12} $display={{ xs: 'none', sm2: 'block' }}>
              <CardDescription>
                Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de
                mayo de 1988), conocida simplemente como Adele, es una cantante,
                compositora y multinstrumentista británica.8​
              </CardDescription>
            </Grid>
            <Grid $display='flex' style={{ gap: '20px', marginTop: 'auto' }}>
              <Button shape='pill'>Reproducir</Button>
              <Button variant='outlined' shape='pill'>
                Seguir
              </Button>
            </Grid>
          </Grid>
        </CardInfo>
      </Grid>
    </Grid>
  )
}
