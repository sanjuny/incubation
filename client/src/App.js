import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import HomePages from './pages/HomePages';
import Formpage from './pages/Formpage';
import Adminloginpage from './pages/Admin/Adminloginpage';
import BookingSlot from './pages/Admin/BookingSlot';
import Applicantpage from './pages/Admin/Applicantpage';
import Approvedpage from './pages/Admin/Approvedpage';
import Rejectedpage from './pages/Admin/Rejectedpage';


function App() {
  return (
    <div className="App">
      
      <Router>

       <Routes>
        <Route path='/login' element={<Loginpage />}/>
        <Route path='/signup' element={<Signuppage />}/> 
        <Route path='/homepage' element={<HomePages />}/>
        <Route path='/form' element={<Formpage />}/>
       </Routes>

       <Routes>
        <Route path='/adminlogin' element={<Adminloginpage />}/>
        <Route path='/booking' element={<BookingSlot />}/>
        <Route path='/applicants' element={<Applicantpage />}/>
        <Route path='/approved' element={<Approvedpage />}/>
        <Route path='/reject' element={<Rejectedpage />}/>
       </Routes>

      
      </Router>
      
    </div>
  );
}

export default App;
