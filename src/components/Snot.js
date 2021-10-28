import React from 'react';
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, Radio, Button } from '@mui/material';
import "../styles/Snot.css";

const problems = ["Need to blow nose", "Sneezing", "Runny nose", "Cough", "Post nasal discharge", "Thick nasal discharge",
"Ear fullness", "Dizziness", "Ear pain", "Facial pain / pressure", "Difficulty falling asleep", "Waking up at night", 
"Lack of a good night’s sleep", "Waking up tired", "Fatigue", "Reduced productivity", "Reduced productivity", 
"Reduced productivity", "Sad", "Embarrassed", "Sense of smell / taste", "Blockage / congestion of nose"];

const options = ["No Problem", "Very mild problem", "Mild or slight problem", "Moderate problem", "Severe problem", 
"Problem as bad as it can be"];

const Snot = () => {
    return (
        <div>
            <div className="title">SinoNasal Outcome Test-22 (SNOT-22)</div>
            <p className="instructions">Considering how severe the problem is when you experience it and how frequently it happens, please rate each item below on how “bad” it is by circling the number that corresponds with how you feel using this scale </p>
            <TableContainer component={Paper} className="container">
                <Table>
                    <TableHead>
                        <TableRow className="table_header">
                            <TableCell>Problems are Listed Below</TableCell>
                            {options.map(op => {
                                return (<TableCell>{op}</TableCell>)
                            })}
                        </TableRow>
                        {problems.map(problem => {
                            return(
                            <TableRow>
                                <TableCell>{problem}</TableCell>
                                {options.map(op => {
                                    return (
                                    <TableCell>
                                        <Radio />
                                    </TableCell>)
                                })}
                            </TableRow>)
                        })}
                    </TableHead>
                </Table>
            </TableContainer>
            <div className="button"><Button variant="contained">Submit</Button></div>
        </div>
    )
}

export default Snot;