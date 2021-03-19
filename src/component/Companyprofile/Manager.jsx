
import React from 'react'
import Button from '@material-ui/core/Button';
import Add_Manager from './Add_Buttons/Add_Manager'

const Manager=()=> {
    return (
        <>
              <div className="card1">
        <h5 className="title-font">Manager</h5>
        
        <div className="row">
         <div className="col-12">
           <div className="table">
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
         </div>
         <AddManager/><br></br>
      

        </div>
        </>
    )
}

export default Manager
