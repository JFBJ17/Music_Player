import Theme from '@/styles/theme.styles'
import { SongProvider } from './SongContext'
import { ThemeProvider } from 'styled-components'

export const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <SongProvider>{children}</SongProvider>
    </ThemeProvider>
  )
}
