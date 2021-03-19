import React from 'react'
import Button from '@material-ui/core/Button';
<<<<<<< HEAD:src/component/Company_profile/Department.jsx
import Add_Department from './Add_Buttons/Add_Department';
=======
import AddDepartment from './Addbuttons/AddDepartment';

>>>>>>> e9207bfa855188ca9ff110f3c445ba5268807bca:src/component/Companyprofile/Department.jsx

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
<<<<<<< HEAD:src/component/Company_profile/Department.jsx
         {/* </div>
         </div> */}
         <Add_Department/>
=======
        
         <AddDepartment/>
>>>>>>> e9207bfa855188ca9ff110f3c445ba5268807bca:src/component/Companyprofile/Department.jsx
          <br/>
        </div>
        </>
    )
}

export default Department