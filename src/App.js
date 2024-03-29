import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import MainLayout from './components/MainLayout';
import DashboardNew from './pages/DashboardNew';
import Enquires from './pages/Enquires';
import BlogList from './pages/BlogList';
import BlogCatList from './pages/BlogCatList';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';

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
            <Route path='enquires' element={<Enquires />} />

            <Route path='blog-list' element={<BlogList />} />
            <Route path='blog-category-list' element={<BlogCatList />} />
            <Route path='blog' element={<AddBlog />} />
            <Route path='blog-category' element={<AddBlogCat />} />

            <Route path='orders' element={<Orders />} />
            <Route path='customers' element={<Customers />} />
            <Route path='list-color' element={<ColorList />} />
            <Route path='color' element={<AddColor />} />
            <Route path='list-category' element={<CategoryList />} />
            <Route path='category' element={<AddCat />} />
            <Route path='brand' element={<AddBrand />} />
            <Route path='list-product' element={<ProductList />} />
            <Route path='product' element={<AddProduct />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
