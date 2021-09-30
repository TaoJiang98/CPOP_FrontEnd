import React from "react";
import { Table } from 'semantic-ui-react'

const Profile = () => {
    return (
        <div className="div">
            <Table celled>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Name:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Smoking History:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Age:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>ETOH Use History</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Gender:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Medical comorbidities:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Race:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Steroid Use History</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Education:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Others:</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Profile;