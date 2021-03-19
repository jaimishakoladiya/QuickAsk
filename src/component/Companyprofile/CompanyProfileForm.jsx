import React from 'react'
import Company_information from './Company_information'
import Department from './Department'
import JobTitle from './JobTitle'
import Manager from './Manager'
<<<<<<< HEAD:src/component/Company_profile/Company_profile_form.jsx
import JobTitle from './JobTitle'
import  '../Company_profile/Company.css';
=======
>>>>>>> 5dffd15a802b16c26a85d4230c540b8be15f512c:src/component/Companyprofile/CompanyProfileForm.jsx

const Company_profile_form=()=> {
    return (
        <>
         <div className="card0">
        <div className="header2">
        <h4 className="company-info-title">Comapany Information</h4>
        </div>
            <Company_information/>
            <Department/>
            <Manager/>
            <JobTitle/>
            </div>

        </>
    )
}

export default Company_profile_form