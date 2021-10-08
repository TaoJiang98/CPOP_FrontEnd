import React, { useEffect, useState } from 'react';
//import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Pagination } from '@mui/material';
import { Stack } from '@mui/material';
import SurveyCard from '../../component/SurveyCard';

// const Survey_Card_1 = (
//   <Card sx={{ maxWidth: 500 }}> 
//     <CardMedia
//         component="img"
//         alt="survey-cover"
//         height="140"
//         image="survey-cover.jpg"
//     />
//     <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         Introduction Survey
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         This survey should take you about 2 minutes.
//         </Typography>
//     </CardContent>
//     <CardActions>
//         <Button size="small">Start</Button>
//     </CardActions>
//     </Card>
//   );

// const Survey_Card_2 = (
//   <Card sx={{ maxWidth: 500 }}>
//     <CardMedia
//         component="img"
//         alt="survey-cover"
//         height="140"
//         image="survey-cover.jpg"
//     />
//     <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         SNOT-22
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//         This survey should take you about 5 minutes.
//         </Typography>
//     </CardContent>
//     <CardActions>
//         <Button size="small">Start</Button>
//     </CardActions>
//     </Card>
//     );

const Patient_Home_Page = () => {
  const [patients, setPatients] = useState({
    "code": 0,
    "msg": "ok",
    "data": [
      {"id": "12345678910","title": "问卷", "status": 0, "createTime": 1536887397173, "startTime": "2018-09-20", "endTime": "2018-10-01"},
      {"id": "22345678910","title": "问卷标题", "status": 1, "createTime": 1536887397666, "startTime": "2018-09-10", "endTime": "2018-10-01"},
      {"id": "32345678910","title": "问题", "status": 2, "createTime": 1536887397888, "startTime": "2018-09-10", "endTime": "2018-09-12"},
      {"id": "42345678910","title": "标题", "status": 0, "createTime": 1536887397173, "startTime": "", "endTime": ""}
    ]
  });
  const url = "http://localhost:8089" + "/domain/api/v1/admin/paper-lists";
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      }
    })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
    })
  })

  return (
    <Stack direction="column" spacing={3} alignItems="center">
      {
        patients.data.map((item, index) => {
          return (<SurveyCard
              title={item.title}
              id = {item.id}
              key = {index}
          />)
        })
      }
    </Stack>
  );
}

export default Patient_Home_Page;