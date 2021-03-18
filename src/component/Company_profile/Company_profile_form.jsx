import React from 'react'
import Company_information from './Company_information'
import Department from './Department'
import JobTitle from './JobTitle'
import Manager from './Manager'

const Company_profile_form=()=> {
    return (
        <>
         <div className="card0">
        <div className="header2">
        <h4>Comapany Information</h4>
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