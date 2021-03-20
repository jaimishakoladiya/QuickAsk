import React from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import HomeNavbar from './HomeNavbar';
import About from '../team/About/About'
import Home from '../home/Home';
import CompanyProfilePage from '../companyprofile/CompanyProfilePage'
const HomeNavbarRouter=()=>{
    return (
    <>
    <HomeNavbar/>
    <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/CompanyProfilePage" component={CompanyProfilePage} />   
        
        
    </Switch>
    </>)
}

export default HomeNavbarRouter;