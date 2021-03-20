import React from 'react'
import CompanyInformation from './Company_information'
import Department from './Department'
import JobTitle from './JobTitle'
import Manager from './Manager'
import JobTitle from './JobTitle'
import  '../Companyprofile/Company.css';

const Company_profile_form=()=> {
    return (
        <>
         <div className="card0">
        <div className="header2">
        <h4 className="company-info-title">Comapany Information</h4>
        </div>
            <CompanyInformation/>
            <Department/>
            <Manager/>
            <JobTitle/>
            </div>

        </>
    )
}

export default Company_profile_form