import React from 'react';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
const Step3 = () =>{
    return(
        <div className="step1">
            <div className="inputfield">
                <PersonIcon className="material-person-icon" /><TextField style={{ width: '160px' }} id="standard-basic" placeholder="First Name" />
                <PersonIcon style={{ marginTop: '-13px', marginLeft: '30px', color: 'gray' }} /><TextField style={{ width: '160px' }} id="standard-basic" placeholder="Last Name" />
                <EmailIcon style={{ marginTop: '-13px', marginLeft: '30px', color: 'gray' }} /><TextField style={{ width: '160px' }} id="standard-basic" placeholder="Email-Id" />
                 <div className="Add"><Button variant="contained" color="secondary" >ADD</Button></div>
            </div>
        </div>

    );
}
export default Step3;