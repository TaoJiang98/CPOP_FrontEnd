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
                  { field: 'smoking history', type: 'boolean', minWidth: 150 },
                  { field: 'ETOH', type: 'boolean', minWidth: 150 },
                  { field: 'medical comorbidities', minWidth: 150 },
                  { field: 'steroid use history', minWidth: 150 }
                ]}
        rows={rows}
      />
    </div>
  );
}
export default Basic_Info;


// import Profile from './Profile';

// const Basic_Info = () => {
//     let history = useHistory();
//     const panes = [
//         { menuItem: 'Personal Information', render: () => <Tab.Pane><Profile/></Tab.Pane> },
//         { menuItem: 'Tab 2', render: () => <Tab.Pane>Picture1</Tab.Pane> },
//         { menuItem: 'Tab 3', render: () => <Tab.Pane>Picture2</Tab.Pane> },
//       ]

//     return (
//         <div>
//             <div>
//                 <button onClick={() => history.goBack()}>back</button>
//             </div>
//             <Tab panes={panes}/>
//         </div>
//     )
// }

// export default Basic_Info;