import React from 'react';
import Feed from './Feed';
import Rightbar from './Rightbar';
import { Box, Stack } from '@mui/material';
import Footer from '../../containers/Home/containers/footer/Footer';
import Navbar from '../../containers/Home/components/navbar/Navbar';

const Blog=()=> {
  return (
    <Box>
      <Navbar style={{ 
        backgroundColor: '#680000',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        boxShadow: '1px 9px 11px -2px rgba(106,0,0,0.73)',
        WebkitBoxShadow: '1px 9px 11px -2px rgba(106,0,0,0.73)',
        MozBoxShadow: '1px 9px 11px -2px rgba(106,0,0,0.73)', }}></Navbar>
      <Box bgcolor="#FCF9F9">
        <Stack 
        direction="row"
        spacing={2}
        justifyContent="space-between">
          <Feed></Feed>
          <Rightbar></Rightbar>  
        </Stack> 
        <Footer></Footer> 
      </Box>  
      </Box> 
  )
}
export default Blog
