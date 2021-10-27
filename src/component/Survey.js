import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Chip, Stack, Typography, Pagination, PaginationItem } from '@mui/material';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <div align="center">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" align="center" gutterBottom>
          In the last two weeks, how has the follwoing impacted you? 
        </Typography>
        <Typography variant="h4" component="div" align="center">     
          Nasal Blockage     
        </Typography>
      </div>

      <CardContent>

        <Stack direction="column" spacing={1} alignItems="center">
          <Chip label="No Problem" color="default" clickable="true"/>
          <Chip label="Very Mild Problem" color="default" clickable="true"/>
          <Chip label="Mild or Slight Problem" color="default" clickable="true"/>
          <Chip label="Moderate Problem" color="default" clickable="true"/>
          <Chip label="Severe Problem" color="default" clickable="true"/>
          <Chip label="Problem as bad as it can be" color="default" clickable="true"/>
        </Stack>
        
      </CardContent>

      <Stack spacing={2} spacing={1} alignItems="center">
        <Button size="small" variant="contained">Next</Button>
        <Pagination count={10} variant="outlined" />

      </Stack> 
 
    </React.Fragment>
  );

const Survey = () => {
    return (

      <Box sx={{ minWidth:275}}>
          {/* <Card variant="outlined">{card}</Card>    */}
          {card}

      </Box>
    )
}

export default Survey;