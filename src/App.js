//import CompanyProfilePage from './component/Companyprofile/CompanyProfilePage'
// import Home from './component/Home/Home'
 import {BrowserRouter} from 'react-router-dom';
// import Team from './component/Team/Team'

import Home from './component/home/Home'

import HomeNavbarRouter from './component/navbar/HomeNavbarRouter';

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
