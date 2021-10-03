// import React from 'react';
// import {Icon, Tab} from "semantic-ui-react";
// import Patient_To_Do from './Patient_To_Do';
// import "../../styles/Patient/Patient_Home_Page.css";
import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Pagination } from '@mui/material';

const Survey_Card_1 = (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="survey-cover.jpeg"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
  );

const Survey_Card_2 = (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
    );

const Patient_Home_Page = () => {
    return (
      <Stack direction="column" spacing={3} alignItems="center">
        {Survey_Card_1}
        {Survey_Card_2}
      </Stack>
    );
}

export default Patient_Home_Page;