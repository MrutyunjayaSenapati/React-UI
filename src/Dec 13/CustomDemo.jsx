import React from 'react'
import {DataGrid} from "./DataGridd"
export default function CustomDemo() {
  return (
    <>
    <div className='container-fluid'>
        <h2>Employees</h2>   
        <DataGrid theme="table-dark"caption="Employee Details-Updated on Dec-2024" fields={['Firs Name','Last Name','Designation']} data={[{FirstName:"Jay",LastName:"Senapati",Designation:"Developer"}]}footer="copyright 2024"
        />     

    </div>

    
    
    </>

  )
}
