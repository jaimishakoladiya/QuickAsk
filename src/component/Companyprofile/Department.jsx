import React from 'react'
import Button from '@material-ui/core/Button';
import AddDepartment from './addbuttons/AddDepartment';

const Department=()=>
{
    return(
        <>
        <div className="Department_card1">
          <h5 className="Department_title-font">Department</h5>
          
         <div className="Department_row">
         <div className="Department_col-12">
           <div className="Department_table">
           <table>
             <thead>
               <tr>
               <th style={{paddingLeft:"10px"}}>Name</th>
               <th style={{paddingLeft:"349px"}}>Cost Center</th>
               <th style={{paddingLeft:"349px"}}>Actions</th>
                </tr>
               
             </thead>
             </table>
           </div>
         </div>
         </div>
         <AddDepartment/>
          <br/>
        </div>
        </>
    );
}

export default Department