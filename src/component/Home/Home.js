import React from 'react'
import Button from '@material-ui/core/Button';
import './home.css'

import img1 from '../img/About/Admininterview.png'

import  SecondHomeComp from './SecondHomeComp'

function Home() {
    return (
        <>
       
        <div className="Home_headtitle">
        <h3 className="home-title">WE</h3>
        <h3 className="home-title" >PRE-SCREEN</h3>
     <h3 className="home-title">INTERVIEWERS</h3>

     <h4 style={{fontStyle:"-moz-initial",fontSize:"25px"}}> so you don't have to worry about it</h4>

     <div className="home-border"></div><br></br>

     <Button className="Home_freebutton" variant="contained" color="secondary">Try It Free</Button><br></br><br></br><br></br><br></br><br></br>
    
     
    
    <SecondHomeComp/>
    
        </div><br></br><br></br><br></br>

        <div className="Home_homefooter">
        <img  className="home-img1" src={img1}/>
      <div className="Home_col-8">
     <h4 style={{color:"white",fontSize:"55px",marginLeft:"60px",marginTop:"40px"}}>WIN YOUR TIME BACK!!</h4>
     <h4 style={{fontSize:"20px",marginLeft:"60px"}}>Rather Than Spending Precious Time Interviewing
The Wrong Candidates, We’ll On-Screen For You So
You Can Spend Your Time On Other Endeavors.</h4>
     </div>
        </div>
   
        </>
    );
}

export default Home
