import React from 'react'
import Button from '@material-ui/core/Button';
<<<<<<< HEAD:src/component/Company_profile/Manager.jsx
import Add_Manager from './Add_Buttons/Add_Manager'
=======
import Add_Manager from './Add_Buttons/Add_Manager';
>>>>>>> 5dffd15a802b16c26a85d4230c540b8be15f512c:src/component/Companyprofile/Manager.jsx

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
<<<<<<< HEAD:src/component/Company_profile/Manager.jsx
         <Add_Manager/><br></br>
=======
         <Add_Manager/>
         <br></br>
>>>>>>> 5dffd15a802b16c26a85d4230c540b8be15f512c:src/component/Companyprofile/Manager.jsx
      

        </div>
        </>
    )
}

export default Manager
