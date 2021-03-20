import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import HomeNavbar from './HomeNavbar';
import About from '../Team/About/About'
import Home from '../Home/Home';
import CompanyProfilePage from '../Companyprofile/CompanyProfilePage'
const HomeNavbarRouter=()=>{
    return (
    <>
    <HomeNavbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/CompanyProfilePage" component={CompanyProfilePage} />   
        
        
    </Switch>
    </>)
}

export default HomeNavbarRouter;