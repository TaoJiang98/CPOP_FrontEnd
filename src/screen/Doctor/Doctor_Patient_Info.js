import React from "react";
import {Tab, Table} from 'semantic-ui-react'
import "../../styles/Doctor/Doctor_Patient_Info.css";

const Doctor_Patient_Info = () => {
    let info = [
        <div align="center"><img src="../../images/morty.jpeg" className="patient_picture"/>
            <p><h3>Patient #1</h3></p>
            <p><h5>This is a patient</h5></p>
            <button className="doctor_info">Basic info</button>
            <button className="doctor_info">Survey info</button>
        </div>,
        <div align="center"><img src="../../images/morty.jpeg" className="patient_picture"/>
            <p><h3>Patient #2</h3></p>
            <p><h5>This is a patient</h5></p>
            <button className="doctor_info">Basic info</button>
            <button className="doctor_info">Survey info</button>
        </div>,
        <div align="center"><img src="../../images/morty.jpeg" className="patient_picture"/>
            <p><h3>Patient #3</h3></p>
            <p><h5>This is a patient</h5></p>
            <button className="doctor_info">Basic info</button>
            <button className="doctor_info">Survey info</button>
        </div>,
    ]

    return (
        <div className="div">
            <Table celled>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{info[0]}</Table.Cell>
                        <Table.Cell>{info[1]}</Table.Cell>
                        <Table.Cell>{info[2]}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Doctor_Patient_Info;