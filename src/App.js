import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import './styles/App.scss';
 
import DocumentaryDebtGenerationSystem from './components/DocumentaryDebtGenerationSystem';
import DocumentationPendingDelivery from './components/DocumentationPendingDelivery';
<<<<<<< HEAD
import SubscriptionsSearchClientsFunds from './components/SubscriptionsSearchClientsFunds';
=======
import DepsaElectronicChargeNaturalPerson from "./components/DepsaElectronicChargeNaturalPerson";
import DepsaElectronicChargeJuridicalPerson from "./components/DepsaElectronicChargeJuridicalPerson";
 
>>>>>>> dd80ae66dceb094747f2c9d8fd36ac3c427683ba

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes> 
     <Route path="/Documentary-Deb-Generation-System" element={<DocumentaryDebtGenerationSystem />} />
     <Route path="/Documentation-Pending-Delivery" element={<DocumentationPendingDelivery />} />
<<<<<<< HEAD
     <Route path="/Subscriptions-Search-Clients-Funds" element={<SubscriptionsSearchClientsFunds />} />
=======
     <Route path="/Depsa-Electronic-Charge-Natural-Person" element={<DepsaElectronicChargeNaturalPerson />} />
     <Route path="/Depsa-Electronic-Charge-Juridical-Person" element={<DepsaElectronicChargeJuridicalPerson />} />
  
  
>>>>>>> dd80ae66dceb094747f2c9d8fd36ac3c427683ba
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;