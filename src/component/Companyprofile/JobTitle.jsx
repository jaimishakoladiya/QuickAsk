import React from 'react'
import Button from '@material-ui/core/Button';
import Add_Job from './Add_Buttons/Add_Job';

const JobTitle=()=> {
    return (
        <>
              <div className="card1">
          <h5 className="title-font">Job Title</h5>
          
         <div className="row">
         <div className="col-12">
           <div className="table">
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
<<<<<<< HEAD:src/component/Company_profile/JobTitle.jsx
         <Add_Job/><br/>
=======
         <Add_Job/>

         <br/>
>>>>>>> 5dffd15a802b16c26a85d4230c540b8be15f512c:src/component/Companyprofile/JobTitle.jsx
        </div>
      
        </>
    )
}

export default JobTitle
