import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PatientLogin from './pages/patient/PatientLogin';
import PatientDashboard from './pages/patient/PatientDashboard';
import BookAppointment from './pages/patient/BookAppointment';
import PatientAppointments from './pages/patient/PatientAppointments';
import DoctorLogin from './pages/doctor/DoctorLogin';
import DoctorDashboard from './pages/doctor/DoctorDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hasta-giris" element={<PatientLogin />} />
        <Route path="/hasta-dashboard" element={<PatientDashboard />} />
        <Route path="/hasta-randevu-al" element={<BookAppointment />} />
        <Route path="/hasta-randevularim" element={<PatientAppointments />} />
        <Route path="/doktor-giris" element={<DoctorLogin />} />
        <Route path="/doktor-dashboard" element={<DoctorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
