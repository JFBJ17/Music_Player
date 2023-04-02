import { useContext, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'

import { Grid } from '@/uis/Grid'
import { Input } from '@/uis/Input'
import { HeaderProps } from './header.interface'
import { UserInfoContainer } from './header.styles'
import { DEZEER_API } from '@/libs/request'
import { SongContext } from '@/contexts/SongContext'

export const Header: React.FC<HeaderProps> = () => {
  const [search, setSearch] = useState('')
  const { setSongs } = useContext(SongContext)

  const getSongs = async () => {
    try {
      const res = await DEZEER_API.get(`search?q=${search}}`)
      setSongs(res.data.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getSongs()
  }, [search])

  return (
    <Grid container>
      <Grid xs={6}>
        <Input
          type='search'
          fullWidth
          placeholder='Buscar'
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </Grid>
      <Grid xs={6} $display='flex' justifyContent='flex-end'>
        <UserInfoContainer>
          <i>
            <FaUser />
          </i>
          <p>Francisco M.</p>
        </UserInfoContainer>
      </Grid>
    </Grid>
  )
}
