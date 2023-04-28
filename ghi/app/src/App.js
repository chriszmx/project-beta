import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListSalesperson from './ListSalesperson';
import ListCustomer from './ListCustomer';
import ListSale from './ListSale';
import CreateCustomer from './CreateCustomer';
import CreateSalesperson from './CreateSalesperson';
import RecordSale from './RecordSale';
import ListTechnicians from './ListTechnicians';
import AddTechnician from './AddTechnician';
import ServiceAppointments from './ListServiceAppointments';
import CreateServiceAppointment from './CreateServiceAppointment';
import ServiceHistory from './ServiceHistory';
import ListManufacturers from './ListManufacturers';
import AddManufacturerForm from './CreateManufacturer';
import ModelList from './ListVehicle';
import SalespersonHistory from './SalespersonHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/salespeople" element={<ListSalesperson />} />
          <Route path="/salespeople/new" element={<CreateSalesperson />} />
          <Route path="/history-salesperson" element={<SalespersonHistory />} />
          <Route path="/customers" element={<ListCustomer />} />
          <Route path="/customers/new" element={<CreateCustomer />} />
          <Route path="/sales" element={<ListSale />} />
          <Route path="/sales/new" element={<RecordSale />} />
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
          <Route path="/create-manufacturers" element={<AddManufacturerForm />} />
          <Route path="/list-vehicle" element={<ModelList/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
