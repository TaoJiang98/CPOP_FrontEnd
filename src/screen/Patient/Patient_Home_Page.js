import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Pagination } from '@mui/material';


const Survey_Card_1 = (
  <Card sx={{ maxWidth: 500 }}> 
    <CardMedia
        component="img"
        alt="survey-cover"
        height="140"
        image="../images/survey-cover.jpg"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Introduction Survey
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This survey should take you about 2 minutes.
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Start</Button>
    </CardActions>
    </Card>
  );

const Survey_Card_2 = (
  <Card sx={{ maxWidth: 500 }}>
    <CardMedia
        component="img"
        alt="survey-cover"
        height="140"
        image="../images/survey-cover.jpg"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        SNOT-22
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This survey should take you about 5 minutes.
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Start</Button>
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