import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import './styles/App.scss';

import DocumentaryDebtGenerationSystem from './components/DocumentaryDebtGenerationSystem';
import DocumentationPendingDelivery from './components/DocumentationPendingDelivery';
import SubscriptionsSearchClientsFunds from './components/SubscriptionsSearchClientsFunds';
import DepsaElectronicChargeNaturalPerson from "./components/DepsaElectronicChargeNaturalPerson";
import DepsaElectronicChargeJuridicalPerson from "./components/DepsaElectronicChargeJuridicalPerson";
import SubscriptionRequestRecord from "./components/SubscriptionRequestRecord";
import RescueClientSearch from "./components/RescueClientSearch";
import RecordRansomRequests from "./components/RecordRansomRequests";


function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes> 

     <Route path="/Documentary-Deb-Generation-System" element={<DocumentaryDebtGenerationSystem />} />
     <Route path="/Documentation-Pending-Delivery" element={<DocumentationPendingDelivery />} />
     <Route path="/Subscriptions-Search-Clients-Funds" element={<SubscriptionsSearchClientsFunds />} />
     <Route path="/Depsa-Electronic-Charge-Natural-Person" element={<DepsaElectronicChargeNaturalPerson />} />
     <Route path="/Depsa-Electronic-Charge-Juridical-Person" element={<DepsaElectronicChargeJuridicalPerson />} />
     <Route path="/Subscription-Request-Record" element={<SubscriptionRequestRecord />} />
     <Route path="/Rescue-Client-Search" element={<RescueClientSearch />} />
     <Route path="/Record-Ransom-Requests" element={<RecordRansomRequests />} />
 
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;