import React, { lazy, Suspense, useEffect } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AddEmployee from './pages/AddEmployee';
import AddNewProduct from './pages/AddNewProduct';
import AllCustomer from './pages/AllCustomer';
import AllEmployee from './pages/AllEmployee';
import AllProduct from './pages/AllProduct';
import Animation from './pages/Animation';
import Attendance from './pages/Attendance';
import Audience from './pages/Audience';
import Calendar from './pages/Calendar';
import Category from './pages/Category';
import Charts from './pages/Charts';
import Chat from './pages/Chat';
import Company from './pages/Company';
import Contacts from './pages/Contacts';
import CrmDashboard from './pages/CrmDashboard';
import Customer from './pages/Customer';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/EditProfile';
import Email from './pages/Email';
import Error400 from './pages/Error400';
import Error403 from './pages/Error403';
import Error404 from './pages/Error404';
import Error408 from './pages/Error408';
import Error500 from './pages/Error500';
import Error503 from './pages/Error503';
import Error504 from './pages/Error504';
import FileManager from './pages/FileManager';
import HrmDashboard from './pages/HrmDashboard';
import Icon from './pages/Icon';
import Invoices from './pages/Invoices';
import Leads from './pages/Leads';
import LoginPage from './pages/Login';
import Map from './pages/Map';
import NestableList from './pages/NestableList';
import Order from './pages/Order';
import PricingTable from './pages/PricingTable';
import PricingTable2 from './pages/PricingTable2';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Registration2 from './pages/Registration2';
import ResetPassword from './pages/ResetPassword';
import SweetAlert from './pages/SweetAlert';
import SwiperSlider from './pages/SwiperSlider';
import Table from './pages/Table';
import Task from './pages/Task';
import UnderConstruction from './pages/UnderConstruction';
import UpdatePassword from './pages/UpdatePassword';
import Utility from './pages/Utility';
import CreateNewUser from './pages/createNewUser';
import NewProduct from './components/add-new-product/NewProducts';
import UserRequirements from './pages/Calculation';
import { DigiContextProvider } from './context/DigiContext'; // Import DigiProvider
import ShowUser from './pages/UserList';
import ManageSegments from './components/companyProducts/manageSegments';
import ManageCalculations from './components/user-requirements/ManageCalculations';
import CreateNewModel from './components/user-requirements/CreateNewModel';
import CreateNewTable from './components/user-requirements/CreateNewTable';
import Unauthorized from './components/login/Unauthorized';
import AuthRoute from './components/login/AuthRoute'; // Path to your AuthRoute component
import NewPage from './components/companyProducts/NewPage';
import BackendParametersPage from './components/companyProducts/ManageParameters';
import EditParameter from './components/companyProducts/EditParameters';
import UserConfigurations from './components/companyProducts/UserConfigurations';
import ConfigurationDetail from './components/companyProducts/ConfigurationsDetail';
import { AuthProvider } from './context/AuthContext'; 

function App() {
  useEffect(() => {
    // Initialize axios auth header if token exists
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

// Lazy loading the components
const EditModelPage = lazy(() => import('./components/user-requirements/EditModel'));
const EditTablePage = lazy(() => import('./components/user-requirements/EditTable'));

  return (
    <Router>
    <AuthProvider>
    <DigiContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {/* Public routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/FileManager" element={<FileManager />} />
            <Route path="/crmDashboard" element={<CrmDashboard />} />
            <Route path="/hrmDashboard" element={<HrmDashboard />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/company" element={<Company />} />
            <Route path="/task" element={<Task />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/addEmployee" element={<AddEmployee />} />
            <Route path="/allEmployee" element={<AllEmployee />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/allCustomer" element={<AllCustomer />} />
            <Route path="/addNewProduct" element={<AddNewProduct />} />
            <Route path="/allProduct" element={<AllProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/order" element={<Order />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/email" element={<Email />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/utility" element={<Utility />} />
            <Route path="/sweetAlert" element={<SweetAlert />} />
            <Route path="/nestableList" element={<NestableList />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/swiperSlider" element={<SwiperSlider />} />
            <Route path="/table" element={<Table />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/icon" element={<Icon />} />
            <Route path="/map" element={<Map />} />
            <Route path="/products" element={<NewProduct />} />
            <Route path="/requirements" element={<UserRequirements />} />
            <Route path="/Unauthorized" element={<Unauthorized />} />
            <Route path="/new-page" element={<NewPage />} />
            <Route path="/manage-parameters" element={<BackendParametersPage />} />
            <Route path="/edit-parameter/:id" element={<EditParameter />} />
            <Route path="/my-configurations" element={<UserConfigurations />} />
            <Route path="/configuration/:id" element={<ConfigurationDetail />} />
            
            
            
            {/* Role-based access routes */}
            <Route path="/createNewUser"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <CreateNewUser />
                </AuthRoute>
              }
            />
            <Route path="/allUsers"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <ShowUser />
                </AuthRoute>
              }
            />
            <Route path="/create-model"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <CreateNewModel />
                </AuthRoute>
              }
            />
            <Route path="/create-table"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <CreateNewTable />
                </AuthRoute>
              }
            />
            <Route path="/manage-segments"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <ManageSegments />
                </AuthRoute>
              }
            />
            <Route path="/manage-calculations"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <ManageCalculations />
                </AuthRoute>
              }
            />

            {/* Lazy loaded components for edit pages */}
            <Route path="/edit/model/:id"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EditModelPage />
                  </Suspense>
                </AuthRoute>
              }
            />
            <Route path="/edit/table/:id"
              element={
                <AuthRoute allowedRoles={['Admin', 'SuperAdmin']}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EditTablePage />
                  </Suspense>
                </AuthRoute>
              }
            />
          </Route>

          {/* Public login and error pages */}
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </DigiContextProvider>
    </AuthProvider>
    </Router>
  );
}

export default App;
