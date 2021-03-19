import React from 'react'
import Button from '@material-ui/core/Button';
<<<<<<< HEAD:src/component/Company_profile/Manager.jsx
import Add_Manager from './Add_Buttons/Add_Manager'
=======
import AddManager from './Addbuttons/AddManager';
>>>>>>> e9207bfa855188ca9ff110f3c445ba5268807bca:src/component/Companyprofile/Manager.jsx

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
               <th style={{paddingLeft:"113.3px"}}>Email</th>
               <th style={{paddingLeft:"113.3px"}}>Status</th>
               <th style={{paddingLeft:"113.3px"}}>Date</th>
               <th style={{paddingLeft:"113.3px"}}>Deleted</th>
               <th style={{paddingLeft:"113.6px"}}>Actions</th>
               </tr>
              
             </thead>
           </div>
         </div>
         </div>
<<<<<<< HEAD:src/component/Company_profile/Manager.jsx
         <Add_Manager/><br></br>
=======
         <AddManager/>
         <br></br>
>>>>>>> e9207bfa855188ca9ff110f3c445ba5268807bca:src/component/Companyprofile/Manager.jsx
      

        </div>
        </>
    )
}

export default Manager
