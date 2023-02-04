import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Bills from './pages/bills/Bills';
import Customers from './pages/customers/Customers';
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/Dashboard'
import Adminbills from './pages/admin/Adminbills';
import Adminproducts from './pages/admin/Adminproducts'
import Admincustomer from './pages/admin/Admincustomers'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/products" element={<Products /> } />
          <Route path="/cart" element={<Cart />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/customers" element={<Customers /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminbills" element={<Adminbills />} />
          <Route path="/adminproducts" element={<Adminproducts />} />
          <Route path="/admincustomers" element={<Admincustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

export function ProtectedRouter({children}) {
  if(localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />
  }
}
