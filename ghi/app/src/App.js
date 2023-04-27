import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import Footer from './Footer';
import SalespersonList from './SalespersonList';
import CustomerList from './CustomerList';
import SaleList from './SaleList';
import CustomerForm from './CustomerForm';
import SalespersonForm from './SalespersonFrom';
import SaleForm from './SaleForm';
import ListTechnicians from './ListTechnicians';
import AddTechnician from './AddTechnician';
import ServiceAppointments from './ListServiceAppointments';
import CreateServiceAppointment from './CreateServiceAppointment';
import ServiceHistory from './ServiceHistory';
import ListManufacturers from './ListManufacturers';
import AddManufacturerForm from './CreateManufacturer';
import ModelList from './ListVehicle';
import CreateVehicleModel from './CreateVehicleModel';
import AutomobileForm from './CreateAutomobile';
import AutomobileList from './ListAutomobiles';


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
          <Route path="/list-technicians" element={<ListTechnicians />} />
          <Route path="/add-technicians" element={<AddTechnician />} />
          <Route path="/service-appointments" element={<ServiceAppointments />} />
          <Route path="/create-service" element={<CreateServiceAppointment />} />
          <Route path="/history-service" element={<ServiceHistory />} />
          <Route path="/list-manufacturers" element={<ListManufacturers />} />
          <Route path="/create-manufacturers" element={<AddManufacturerForm />} />
          <Route path="/list-vehicle" element={<ModelList/>} />
          <Route path="/create-model" element={<CreateVehicleModel />} />
          <Route path="/automobile/form" element={<AutomobileForm />} />
          <Route path="/automobile/list" element={<AutomobileList />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
