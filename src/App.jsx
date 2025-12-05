import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Menu } from './components/Menu'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d19ea3',
      light: '#ffe3e8',
      dark: '#005b53',
    },
    secondary: {
      main: '#b0ad88',
    },
    background: {
      default: '#ffe5e7',
      paper: 'rgba(255,255,255,0.52)',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      fontFamily: 'Dongle',
    },
    body1: {
      fontSize: '1rem',
      fontFamily: 'Quicksand',
    },
  },
  spacing: 8, // Custom spacing (default is 8px)
})

const mainWrapperStyle = { display: 'flex', flexDirection: 'column' }
const centerContentWrapper = { display: 'flex', justifyContent: 'center' }
const contentWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '30rem',
  flexGrow: 1,
}
const MainWrapper = ({ children }) => {
  return (
    <div style={mainWrapperStyle}>
      <div style={centerContentWrapper}>
        <div style={contentWrapperStyle}>{children}</div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Menu />
      </MainWrapper>
    </ThemeProvider>
  )
}

export default App