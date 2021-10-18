import React, { useEffect, useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import '../styles/Survey.css';
// import { Box, Button, Card, CardActions, CardContent, Chip, Stack, Typography, Pagination } from '@mui/material';
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     <div align="center">
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" align="center" gutterBottom>
//         In the last two weeks, how has the follwoing impacted you? 
//       </Typography>
//       <Typography variant="h4" component="div" align="center">     
//         Nasal Blockage     
//       </Typography>
//     </div>

//     <CardContent>

//       <Stack direction="column" spacing={1} alignItems="center">
//         <Chip label="No Problem" color="default" clickable="true"/>
//         <Chip label="Very Mild Problem" color="default" clickable="true"/>
//         <Chip label="Mild or Slight Problem" color="default" clickable="true"/>
//         <Chip label="Moderate Problem" color="default" clickable="true"/>
//         <Chip label="Severe Problem" color="default" clickable="true"/>
//         <Chip label="Problem as bad as it can be" color="default" clickable="true"/>
//       </Stack>

//     </CardContent>

//     <Stack spacing={2} spacing={1} alignItems="center">
//       <Button size="small" variant="contained">Next</Button>
//       <Pagination count={10} variant="outlined" />
//     </Stack> 

//   </React.Fragment>
// );

const submitHandler = () => {

}

const Survey = () => {
  const [question, setQuestion] = useState({ "data": { "questions": ["question"] } });
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [education, setEducation] = useState('');
  const [smoke, setSmoke] = useState('');
  const [etoh, setEtoh] = useState('');
  const [comor, setComor] = useState('');
  const [steriod, setSteriod] = useState('');
  //const title = localStorage.getItem("title");
  const id = localStorage.getItem("id");
  const body = { "id": id };
  const url = "/api/v1/admin/view-paper";
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setQuestion(res)
      })
  }, [])

  return (
    // <Box sx={{ minWidth:275}}>
    //     {/* <Card variant="outlined">{card}</Card>    */}
    //     {card}
    // </Box>
    // <div>
    //     {question.data.questions.map(q => {
    //         return <h3>{q.questionTitle}</h3>
    //     })}
    // </div>
    <div>
      <div className="intro">Introduction Survey</div>
      <Row className="justify-content-md-center">
        <Col xs={4}>
          <Card className="card">
            <Card.Body>
              <Form noValidate onSubmit={submitHandler}>
                <Row>
                  <Col>
                    <Form.Group controlId="year">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter age"
                        min={1}
                        max={100}
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <Form.Group controlId="gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select rounded"
                        value={gender || ''}
                        onChange={e => setGender(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="race">
                      <Form.Label>Race</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select rounded"
                        value={race || ''}
                        onChange={e => setRace(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option value="asian">asian</option>
                        <option value="indian">indian</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <Form.Group controlId="education">
                      <Form.Label>Education</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select rounded"
                        value={education || ''}
                        onChange={e => setEducation(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="high school">high school</option>
                        <option value="undergraduate">undergraduate</option>
                        <option value="master">master</option>
                        <option value="phd">phd</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="smoking history">
                      <Form.Label>Smoking history</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select rounded"
                        value={smoke || ''}
                        onChange={e => setSmoke(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <Form.Group controlId="etoh history">
                      <Form.Label>ETOH history</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select rounded"
                        value={etoh || ''}
                        onChange={e => setEtoh(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="medical comorbidities">
                      <Form.Label>Medical comorbidities</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select rounded"
                        value={comor || ''}
                        onChange={e => setComor(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="none">none</option>
                        <option value="other">other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="py-3">
                  <Col>
                    <Form.Group controlId="steroid use history">
                      <Form.Label>Steriod use history</Form.Label>
                      <Form.Control
                        as="select"
                        className="form-select rounded"
                        value={steriod || ''}
                        onChange={e => setSteriod(e.target.value)}
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="none">none</option>
                        <option value="other">other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}


export default Survey;