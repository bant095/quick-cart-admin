import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import MainLayout from './components/MainLayout';
import DashboardNew from './pages/DashboardNew';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
          <Route path='/admin' element={<MainLayout />}>
            <Route index element={<DashboardNew />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
