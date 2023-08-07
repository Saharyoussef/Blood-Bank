import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Checkbox} from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
const Post=({avatar,author,date,titre,image,content,title,expandedContent})=> {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  return (
    <div>
    <Card sx={{ margin: 5 }}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#9A0505" }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        
        title={author}
        subheader={date}
      />
      <Typography sx={{color:"#9A0505", margin:1, fontSize:20 , fontWeight:'bold'}}>{titre}</Typography>
      
      <CardMedia
        component="img"
        height="20%"
        img={image}
        alt="blood Bank"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>
            {expandedContent}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    </div>
  )
}

export default Post