import React from 'react'
import Footer from '../components/footer/Footer'
import BasicInformation from '../components/add-employee/BasicInformation'
import PersonalInformation from '../components/add-employee/PersonalInformation'
import SalarySection from '../components/add-employee/SalarySection'
import BankDetails from '../components/add-employee/BankDetails'
import PermanentAddress from '../components/add-employee/PermanentAddress'
import BiologicalInfo from '../components/add-employee/BiologicalInfo'
import EmergencyContact from '../components/add-employee/EmergencyContact'
import LoginInfo from '../components/add-employee/LoginInfo'
import SaveBtn from '../components/add-employee/SaveBtn'
import AddNewBreadcrumb from '../components/breadcrumb/AddNewBreadcrumb'

const AddEmployee = () => {
  return (
    <div className="main-content">
        <AddNewBreadcrumb link={'/allEmployee'} title={'Add Employee'}/>
        <div className="row">
            <BasicInformation/>
            <PersonalInformation/>
            <SalarySection/>
            <BankDetails/>
            <PermanentAddress/>
            <BiologicalInfo/>
            <EmergencyContact/>
            <LoginInfo/>
            <SaveBtn/>
        </div>
        <Footer/>
    </div>
  )
}

export default AddEmployee