import Footer from '../components/footer/Footer';
import AudienceHeader from '../components/header/AudienceHeader';
import AudienceFilter from '../components/filter/AudienceFilter';
import AudienceTable from '../components/tables/AudienceTable';
import { DigiContextProvider } from '../context/DigiContext';
import { audienceData } from '../data/Data';

const AudienceMainContent = () => {
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-12">
          <div className="panel">
            <AudienceHeader/>
            <div className="panel-body">
              <div className="table-filter-option">
                <AudienceFilter/>
              </div>
              <DigiContextProvider dataArray={audienceData}>
                <AudienceTable />
              </DigiContextProvider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AudienceMainContent;
