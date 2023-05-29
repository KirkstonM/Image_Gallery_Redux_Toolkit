import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode, modeSelected } from '../features/pictureSlice';
import { Box } from '@mui/material';
import logoImage from '../images/logo.png';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Navigation() {

  const currentMode = useSelector(modeSelected);
  const dispatch = useDispatch();

  const toggleModes = () => {
    dispatch(toggleMode())
  };

  return (
    <Box sx={{
      borderBottom : '2px solid #222',
      p: 1,
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center'
    }}>
      <Box sx={{ display: 'inline-block' }}>
        <img src={logoImage} alt='logo' style={{ width: '4rem', height: '4rem', borderRadius: '2rem' }} />
      </Box>
      <Box sx={{p : 1, mr : 2, cursor : 'pointer' }} onClick={toggleModes}>
        {currentMode === 'dark' ? <NightsStayIcon /> : <WbSunnyIcon /> }
      </Box>
    </Box>
  )
}

export default Navigation