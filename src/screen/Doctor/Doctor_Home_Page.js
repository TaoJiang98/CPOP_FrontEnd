import React from 'react';
import {Icon, Tab} from "semantic-ui-react";
import Doctor_Patient_Info from "./Doctor_Patient_Info";
import "../../styles/Doctor/Doctor_Home_Page.css";

const Doctor_Home_Page = () => {

    const panes = [
        { menuItem: 'Patients', render: () => <Tab.Pane><Doctor_Patient_Info/></Tab.Pane> },
        { menuItem: 'Analytics', render: () => <Tab.Pane>Analytics</Tab.Pane> },
    ]

    return (
        <div>
            <div>
                <button className="doctor_sign_out">Sign out</button>
                <button className="doctor_invite">
                    <Icon name="plus square outline"/>
                    Invite
                </button>
                <button className="doctor_user">
                    <Icon name="user doctor"/>
                    Dr. Daniel Xiao
                </button>
            </div>
            <div className="doctor_panes">
                {<Tab panes={panes}/>}
            </div>
        </div>
    )
}

export default Doctor_Home_Page;