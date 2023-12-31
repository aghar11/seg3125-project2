import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import HorizonView from './components/coursepages/HorizonView';
import SoaringHeights from './components/coursepages/SoaringHeights';
import Basics from './components/learnPages/Basics';
import Instructors from './components/learnPages/Instructors';
import BookingPage from './components/coursepages/BookingPage';
import TournamentHome from './components/tournamentPages/TournamentHome';
import TournamentRegistration from './components/tournamentPages/TournamentRegistration';
import TournamentList from './components/tournamentPages/TournamentList';
import MemberLogin from './components/memberpages/MemberLogin';
import MemberHome from './components/memberpages/MemberHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path='/horizonView' element={<HorizonView/>} />
        <Route exact path='/soaringHeights' element={<SoaringHeights/>} />
        <Route exact path='/learn/basics' element={<Basics/>} />
        <Route exact path='/learn/instructors' element={<Instructors/>} />
        <Route exact path='/courseBooking' element={<BookingPage/>} />
        <Route exact path='/tournamentHome' element={<TournamentHome/>} />
        <Route exact path='/tournamentRegistration' element={<TournamentRegistration/>} />
        <Route exact path='/tournamentList' element={<TournamentList/>} />
        <Route exact path='/memberLogin' element={<MemberLogin/>} />
        <Route exact path='/memberHome' element={<MemberHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
