import React from 'react';
import {Icon, Tab} from "semantic-ui-react";
import Patient_To_Do from './Patient_To_Do';
import "../../styles/Patient/Patient_Home_Page.css";

const Patient_Home_Page = () => {

    const panes = [
        { menuItem: 'To Do', render: () => <Tab.Pane><Patient_To_Do/></Tab.Pane> },
        { menuItem: 'Completed', render: () => <Tab.Pane>Completed</Tab.Pane> },
    ]

    return (
        <div>
            <div>
                <button className="patient_sign_out">Sign out</button>
                <button className="patient_user">
                    <Icon name="user patient"/>
                    Daniel Xiao
                </button>
            </div>
            <div className="patient_panes">
                {<Tab panes={panes}/>}
            </div>
        </div>
    )
}

export default Patient_Home_Page;