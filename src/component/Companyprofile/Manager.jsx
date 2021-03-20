
import React from 'react'
import Button from '@material-ui/core/Button';
import AddManager from './Addbuttons/AddManager'

const Manager=()=> {
    return (
        <>
              <div className="Manager_card1">
        <h5 className="Manager_title-font">Manager</h5>
        
        <div className="Manager_row">
         <div className="Manager_col-12">
           <div className="Manager_table">
             <thead>
               <tr>
               <th style={{paddingLeft:"10px"}}>Name</th>
               <th style={{paddingLeft:"134px"}}>Email</th>
               <th style={{paddingLeft:"134px"}}>Status</th>
               <th style={{paddingLeft:"134px"}}>Date</th>
               <th style={{paddingLeft:"134px"}}>Deleted</th>
               <th style={{paddingLeft:"114px"}}>Actions</th>
               </tr>
              
             </thead>
           </div>
         </div>

         <AddManager/><br></br>
      
        </div>
        </div>
        </>
    )
}

export default Manager
