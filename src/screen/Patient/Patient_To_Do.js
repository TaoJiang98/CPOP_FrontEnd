import React from 'react';
import { Table } from 'semantic-ui-react';
import "../../styles/Patient/Patient_To_Do.css";


const Patient_To_Do = () => {
    return (
        <div className="div to_do_table">
            <Table celled>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <div align="center">
                                <img src="../../images/morty.jpeg" className="to_do_picture" />
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <div>
                                <p><h2>SNOT-22: Before your surgery</h2></p>
                                <p><h5>This should only take you 5 minutes</h5></p>
                                <div className="to_do">
                                    <button className="to_do_start">START</button>
                                    <text className="to_do_placeholder">This is some placeholder text on Tab 1</text>
                                </div>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default Patient_To_Do;