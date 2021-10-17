import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import cover from '../images/survey-cover.jpg';

const SurveyCard = ({title, id}) => {
    const history = useHistory();

    const store = (title, id) => {
        localStorage.setItem("title", title);
        localStorage.setItem("id", id);
        history.push("/survey");
    }

    return (
        <Card sx={{ maxWidth: 500 }}> 
            <CardMedia
                component="img"
                alt="survey-cover"
                height="140"
                image={cover}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                This survey should take you about 15 minutes.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => store(title, id)}>Start</Button>
            </CardActions>
        </Card>
    )
}

export default SurveyCard;