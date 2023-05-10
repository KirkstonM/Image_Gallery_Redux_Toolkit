import React from 'react';
import Navigation from './components/Navigation';
import Picturegallery from './components/Picturegallery';
import { modeSelected } from './features/pictureSlice';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';



function App() {

  const currentMode = useSelector(modeSelected);

  const theme = createTheme({
    palette: {
      mode: currentMode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Picturegallery />
    </ThemeProvider>
  )
}

export default App