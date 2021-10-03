import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Profile from '/Profile.js';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Patient#1
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>This is patient#1. </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Profile/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Patient#2
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            This is patient#2.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Patient#3
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            This is patient#3.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Patient#4
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            This is patient#4.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> 
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

// import React from 'react';
// import {Icon, Tab} from "semantic-ui-react";
// import Doctor_Patient_Info from "./Doctor_Patient_Info";
// import "../../styles/Doctor/Doctor_Home_Page.css";

// const Doctor_Home_Page = () => {

//     const panes = [
//         { menuItem: 'Patients', render: () => <Tab.Pane><Doctor_Patient_Info/></Tab.Pane> },
//         { menuItem: 'Analytics', render: () => <Tab.Pane>Analytics</Tab.Pane> },
//     ]

//     return (
//         <div>
//             <div>
//                 <button className="doctor_sign_out">Sign out</button>
//                 <button className="doctor_invite">
//                     <Icon name="plus square outline"/>
//                     Invite
//                 </button>
//                 <button className="doctor_user">
//                     <Icon name="user doctor"/>
//                     Dr. Daniel Xiao
//                 </button>
//             </div>
//             <div className="doctor_panes">
//                 {<Tab panes={panes}/>}
//             </div>
//         </div>
//     )
// }

// export default Doctor_Home_Page;