import React from 'react'
import Button from '@material-ui/core/Button';
<<<<<<< HEAD:src/component/Company_profile/JobTitle.jsx
import Add_Job from './Add_Buttons/Add_Job';

=======
import AddJob from './Addbuttons/AddJob';
>>>>>>> e9207bfa855188ca9ff110f3c445ba5268807bca:src/component/Companyprofile/JobTitle.jsx

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
         <AddJob/>

         <br/>
>>>>>>> e9207bfa855188ca9ff110f3c445ba5268807bca:src/component/Companyprofile/JobTitle.jsx
        </div>
      
        </>
    )
}

export default JobTitle
