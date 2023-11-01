import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes} from './routes'
import GlobalStyles from './styles/global'
import {ThemeProvider} from 'styled-components'
import { AuthProvider } from './hooks/auth'
//importar as cores, para temas
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider >
       <Routes/>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
