import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Navbarmenu(props) {
  const [isMenu, setisMenu] = useState(false);
  
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setSubMenu(false);
  };
 
  let boxClass = ["layout__menuitems layout__hidemenu "];
  if(isMenu) {
      boxClass.push('layout__visiblemenu');
  }else{
      boxClass.push('');
  }

  const [isSubMenu, setSubMenu] = useState(false);
  const SubmenuActiveClass = () => {
    setisMenu(false);
    setSubMenu(true);
  };
  
return(
  <header className="layout__header">
   <NavLink to="/" className="layout__logo">
     <h1> <img src={}/> </h1>
    </NavLink>
    <nav className="layout__navBar ">
      
      <span className="layout__response__menubar" style={{ display: 'none' }} onClick={toggleClass} > <ListIcon/> </span>

      <ul className={boxClass.join(' ')}>
        <li onClick={toggleClass}>
          <NavLink exact activeClassName='is-active' to="/">Home</NavLink>
        </li>
        <li onClick={SubmenuActiveClass}>
          <NavLink exact activeClassName='is-active' to="/Blog"  className={isSubMenu === true ? 'is-active' : null}>
          Accounts<ArrowDropDownIcon style={{fontSize:"35px",marginBottom:"-10px"}}/> </NavLink>
          <ul className="sub-menu" >
            <li><NavLink  exact activeClassName='is-active' to="/Latest" onClick={toggleClass}> CreateAccount </NavLink></li>
            <li><NavLink  exact activeClassName='is-active' to="/Oldest" onClick={toggleClass}>  Login </NavLink></li>
          </ul>
        </li>

        <li onClick={SubmenuActiveClass}>
          <NavLink exact activeClassName='is-active' to="/Blog"  className={isSubMenu === true ? 'is-active' : null}>
          Team<ArrowDropDownIcon style={{fontSize:"35px",marginBottom:"-10px"}}/> </NavLink>
          <ul className="sub-menu" >
            <li><NavLink  exact activeClassName='is-active' to="/Latest" onClick={toggleClass}> AboutUS </NavLink></li>
            <li><NavLink  exact activeClassName='is-active' to="/Oldest" onClick={toggleClass}> Contact Us </NavLink></li>
          </ul>
        </li>
        <li onClick={toggleClass}>
          <NavLink exact activeClassName='is-active' to="/About">Blog</NavLink>
        </li>
        

                           
      </ul>
    </nav>
                  
  </header>
        );
    }

export default Navbarmenu;