import React from 'react'
import Button from '@material-ui/core/Button';
import AddDepartment from './Addbuttons/AddDepartment';


const Department=()=>
{
    return(
        <>
        <div className="card1">
          <h5 className="title-font">Department</h5>
          
         
           <div className="table">
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
        
         <AddDepartment/>
          <br/>
        </div>
        </>
    )
}

export default Department