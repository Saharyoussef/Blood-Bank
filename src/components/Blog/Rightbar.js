import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Hospital blood donation',
    author: '@amir-ali-saver',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Blood Bank activities',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Blood Day celebration',
    author: '@helloimnik',
  },

];

const Rightbar=()=> {
  return (
    <Box 
    flex={2} p={2}
    sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="sticky" width={400} mt={2} mb={2} top={20}>
        <Typography  sx={{color:"#9A0505", margin:2, fontSize:20 , fontWeight:'bold'}}>
          Online People
        </Typography>
        
        <AvatarGroup max={8}>
          <Avatar alt="Sahar Youssef" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Samar Sassi" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Ahmed Ali" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Soumow dhawi" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Ahmed Moncer" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Nadine saad" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Amir Mabrouk" src="/static/images/avatar/4.jpg" />
        </AvatarGroup>

        <Typography sx={{color:"#9A0505", margin:2, fontSize:20 , fontWeight:'bold'}}>
          Recent Blogs
        </Typography>

        <ImageList cols={3} rowHeight={80} gap={10}>
          {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
          ))}
      </ImageList>

      <Typography sx={{color:"#9A0505", margin:2, fontSize:20 , fontWeight:'bold'}}>
        Recent Comments
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sahar Youssef" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="A day in the life of a blood donor "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Saleh
              </Typography>
              {" — How does he feel the donor while blood donation?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Karim Ali" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="The power of a single Pint"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Saleh , Samira
              </Typography>
              {" — Really the blood donation is a life saver..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="The science of saving lives"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — My sister is a doctor and she always encourage me to be a blood donor.'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar