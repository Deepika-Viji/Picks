import Footer from '../components/footer/Footer'
import CustomerHeader from '../components/header/CustomerHeader'
import CustomerTableFilter from '../components/filter/CustomerTableFilter';
import CustomerTable from '../components/tables/CustomerTable';
const CustomerMainContent = () => {
  return (
    <div className="main-content">
        <div className="row">
            <div className="col-12">
                <div className="panel">
                    <CustomerHeader/>
                    <div className="panel-body">
                        <CustomerTableFilter/>
                        <CustomerTable/>                    
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CustomerMainContent