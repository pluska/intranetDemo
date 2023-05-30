import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import './styles/App.scss';
 
import DocumentaryDebtGenerationSystem from './components/DocumentaryDebtGenerationSystem';
import DocumentationPendingDelivery from './components/DocumentationPendingDelivery';
import DepsaElectronicChargeNaturalPerson from "./components/DepsaElectronicChargeNaturalPerson";
import DepsaElectronicChargeJuridicalPerson from "./components/DepsaElectronicChargeJuridicalPerson";
 

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
    
     <Route path="/Documentary-Deb-Generation-System" element={<DocumentaryDebtGenerationSystem />} />
     <Route path="/Documentation-Pending-Delivery" element={<DocumentationPendingDelivery />} />
     <Route path="/Depsa-Electronic-Charge-Natural-Person" element={<DepsaElectronicChargeNaturalPerson />} />
     <Route path="/Depsa-Electronic-Charge-Juridical-Person" element={<DepsaElectronicChargeJuridicalPerson />} />
  
  
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;