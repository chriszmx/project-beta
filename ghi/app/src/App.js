import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
<<<<<<< HEAD
import ListTechnicians from './ListTechnicians';
import AddTechnician from './AddTechnician';
import ServiceAppointments from './ListServiceAppointments';
import CreateServiceAppointment from './CreateServiceAppointment';
import ServiceHistory from './ServiceHistory';
import ListManufacturers from './ListManufacturers';
import AddManufacturerForm from './CreateManufacturer';
import ModelList from './ListVehicle';
=======
import SalespersonList from './SalespersonList';
import CustomerList from './CustomerList';
import SaleList from './SaleList';
import CustomerForm from './CustomerForm';
import SalespersonForm from './SalespersonFrom';
import SaleForm from './SaleForm';

>>>>>>> 79821db40f840c144c0ae148e5f6765114422e39
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/salespeople" element={<SalespersonList />} />
          <Route path="/salespeople/new" element={<SalespersonForm />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/new" element={<CustomerForm />} />
          <Route path="/sales" element={<SaleList />} />
          <Route path="/sales/new" element={<SaleForm />} />
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
