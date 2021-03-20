import React from 'react'
import Button from '@material-ui/core/Button';
import AddJob from './Addbuttons/AddJob';

const JobTitle=()=> {
    return (
        <>
              <div className="JobTitle_card1">
          <h5 className="JobTitle_title-font">Job Title</h5>
          
         <div className="JobTitle_row">
         <div className="JobTitle_col-12">
           <div className="JobTitle_table">
             <thead>
               <tr>
               <th style={{paddingLeft:"10px"}}>Name</th>
               <th style={{paddingLeft:"347px"}}>Department</th>
               <th style={{paddingLeft:"347px"}}>Actions</th>
               </tr>
             </thead>
           </div>
         </div>
         </div>
         <AddJob/>

         <br/>
        </div>
      
        </>
    )
}

export default JobTitle
