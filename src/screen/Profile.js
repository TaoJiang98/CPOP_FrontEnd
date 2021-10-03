import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    name: 'Michael',
    age: 38,
    gender: 'male',
    race: 'white',
    education: 'college',
    'smoking history': true,
    'ETOH history': false,
    'medical comorbidities': 'none',
    'steroid use history': 'none'

  },
];

const Basic_Info = () => {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[
                  { field: 'age', minWidth: 150 }, 
                  { field: 'gender', minWidth: 150 },
                  { field: 'race', minWidth: 150 },
                  { field: 'education', minWidth: 150 },
                  { field: 'smoking history', type: 'boolean', minWidth: 250 },
                  { field: 'ETOH history', type: 'boolean', minWidth: 250 },
                  { field: 'medical comorbidities', minWidth: 250 },
                  { field: 'steroid use history', minWidth: 250 }
                ]}
        rows={rows}
      />
    </div>
  );
}
export default Basic_Info;
// import React from "react";
// import { Table } from 'semantic-ui-react'

// const Profile = () => {
//     return (
//         <div className="div">
//             <Table celled>
//                 <Table.Body>
//                     <Table.Row>
//                         <Table.Cell>Name:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                         <Table.Cell>Smoking History:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                     </Table.Row>
//                     <Table.Row>
//                         <Table.Cell>Age:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                         <Table.Cell>ETOH Use History</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                     </Table.Row>
//                     <Table.Row>
//                         <Table.Cell>Gender:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                         <Table.Cell>Medical comorbidities:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                     </Table.Row>
//                     <Table.Row>
//                         <Table.Cell>Race:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                         <Table.Cell>Steroid Use History</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                     </Table.Row>
//                     <Table.Row>
//                         <Table.Cell>Education:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                         <Table.Cell>Others:</Table.Cell>
//                         <Table.Cell>Cell</Table.Cell>
//                     </Table.Row>
//                 </Table.Body>
//             </Table>
//         </div>
//     )
// }

// export default Profile;