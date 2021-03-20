//import CompanyProfilePage from './component/Companyprofile/CompanyProfilePage'
//import Home from './component/Home/Home'
 import {BrowserRouter} from 'react-router-dom';
// import Team from './component/Team/Team'
// import CompanyProfilePage from './component/Companyprofile/CompanyProfilePage'
// import AppD from './component/Interviews/AppD'

import HomeNavbarRouter from './component/Navbar/HomeNavbarRouter';

function App() {
  return (
   <>
   <BrowserRouter>
     <HomeNavbarRouter/>
   </BrowserRouter>

    {/* <Home/> */}
   </>
  );
}

export default App;
