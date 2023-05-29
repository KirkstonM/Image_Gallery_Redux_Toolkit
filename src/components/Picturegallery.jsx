import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, styled } from '@mui/material';
import { fetchImages, pictureData } from '../features/pictureSlice';
import { useDispatch, useSelector } from 'react-redux';

function Picturegallery() {

  const fetchedPictureData = useSelector(pictureData);
  const dispatch = useDispatch();
  
  const fetchData = () => {
    dispatch(fetchImages());
  }

  useEffect(() => {
    fetchData();
  } ,[dispatch])

  return (
   <>
   <Container maxWidth = 'xl' sx={{
   maxHeight : 'auto',
   my: 5
   }}>
    <Box>
      <Typography variant='h3'
      align='center'
      fontFamily={'roberto'}
      marginTop={2}
      color='info.dark'
      mb={5}>
        Lorem Picsum Gallery
        </Typography>
    </Box>


    <Grid container direction='row' spacing={3} textAlign='center'> 
      {
        fetchedPictureData.map(item => {
          return <Grid item xs ={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
            <Box component='img' sx={{
              height : 'auto',
              width: '450px',
              backgroundSize: 'contain',
              cursor : 'pointer',
              '&:hover' : {
                transform: 'scale(1.1)'
              }
            }}
            src={item.download_url}
            alt={item.author}
            />
            </Grid>
        })
      }
    </Grid>
   </Container>
   </>
  )
}

export default Picturegallery