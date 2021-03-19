import React from 'react'
import CompanyInformation from './CompanyInformation'
import Department from './Department'
import JobTitle from './JobTitle'
import Manager from './Manager'

const CompanyProfileForm=()=> {
    return (
        <>
         <div className="card0">
        <div className="header2">
        <h4>Comapany Information</h4>
        </div>
            <CompanyInformation/>
            <Department/>
            <Manager/>
            <JobTitle/>
            </div>

        </>
    )
}

export default CompanyProfileForm