import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListTechnicians from './ListTechnicians';
import AddTechnician from './AddTechnician';
import ServiceAppointments from './ListServiceAppointments';
import CreateServiceAppointment from './CreateServiceAppointment';
import ServiceHistory from './ServiceHistory';
import ListManufacturers from './ListManufacturers';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/list-technicians" element={<ListTechnicians />} />
          <Route path="/add-technicians" element={<AddTechnician />} />
          <Route path="/service-appointments" element={<ServiceAppointments />} />
          <Route path="/create-service" element={<CreateServiceAppointment />} />
          <Route path="/history-service" element={<ServiceHistory />} />
        </Routes>
        <Routes>
          <Route path="/list-manufacturers" element={<ListManufacturers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
