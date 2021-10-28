import React, { useEffect, useState } from 'react';
//import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, Pagination } from '@mui/material';
import { Stack } from '@mui/material';
// import SurveyCard from '../../component/SurveyCard';
import SurveyCard from 'components/SurveyCard.js';


const Patient_Home_Page = () => {
  const [patients, setPatients] = useState({
    "code": 0,
    "msg": "ok",
    "data": [
      {"id": "12345678910","title": "SinoNasal Outcome Test", "status": 0, "createTime": 1536887397173, "startTime": "2018-09-20", "endTime": "2018-10-01"},
      {"id": "22345678910","title": "Introduction Survey", "status": 1, "createTime": 1536887397666, "startTime": "2018-09-10", "endTime": "2018-10-01"},
    ]
  });

  const url =  "/api/v1/admin/paper-lists";

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
          setPatients(res)
        })
  },[])

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