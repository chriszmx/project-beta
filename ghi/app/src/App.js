import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespersonList from './SalespersonList';
import CustomerList from './CustomerList';
import SaleList from './SaleList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/salespeople" element={<SalespersonList />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/sales" element={<SaleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
