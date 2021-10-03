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
