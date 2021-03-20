
import CompanyProfilePage from './component/Companyprofile/CompanyProfilePage'
import AppD from './component/Interviews/AppD'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter} from 'react-router-dom';
import About from './component/Team/About/About'
import HomeNavbar from './component/Navbar/HomeNavbar';
import HomeNavbarRouter from './component/Navbar/HomeNavbarRouter';
function App() {
  return (
   <>
 <BrowserRouter>
   <HomeNavbarRouter/>
 </BrowserRouter>
   </>
  );
}

export default App;
