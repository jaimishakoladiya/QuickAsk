//import CompanyProfilePage from './component/Companyprofile/CompanyProfilePage'
import Home from './component/Home/Home'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Team from './component/Team/Team'

// import Team from './component/Team/Team'
import AppD from './component/Interviews/AppD'
import Navbar  from './component/Navbar/Navbar'
import About from './component/Team/About/About';
function App() {
  return (
   <>
    <Router>
     <Switch>
     <Navbar/>
     <Route exact path="/About" component={About}></Route>
     </Switch>
   </Router> 

    {/* <Home/>  */}
  {/* <CompanyProfilePage/>  */}
   {/* <Team/>  */}
  {/* <AppD/>  */}
 
   </>
  );
}

export default App;
