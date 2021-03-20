import React from 'react'
import CompanyInformation from './CompanyInformation'
import Department from './Department'
import JobTitle from './JobTitle'
import Manager from './Manager'
import  '../Companyprofile/Company.css';

const CompanyProfileForm=()=> {
    return (
        <>
         <div className="card0">
        <div className="formheader">
        <h4 className="company-info-title">Comapany Information</h4>
        </div>
        <CompanyInformation />
        <Department />
        <Manager />
        <JobTitle />
      </div>
    </>
  );
};

export default CompanyProfileForm;
