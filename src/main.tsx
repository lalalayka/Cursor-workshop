import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import App from './App.tsx'

const theme = extendTheme({
  fontFamily: {
    body: '"Space Grotesk", var(--joy-fontFamily-fallback)',
    display: '"Space Grotesk", var(--joy-fontFamily-fallback)',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#FFFCE6',
          100: '#FFF8CC',
          200: '#FFF29A',
          300: '#FFEB67',
          400: '#FFE535',
          500: '#FFDE02',
          600: '#D1B500',
          700: '#A38E01',
          800: '#756601',
          900: '#473E01',
          solidColor: '#000000',
          softColor: '#000000',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#FFFCE6',
          100: '#FFF8CC',
          200: '#FFF29A',
          300: '#FFEB67',
          400: '#FFE535',
          500: '#FFDE02',
          600: '#D1B500',
          700: '#A38E01',
          800: '#756601',
          900: '#473E01',
          solidColor: '#000000',
          softColor: '#FFDE02',
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>,
)
