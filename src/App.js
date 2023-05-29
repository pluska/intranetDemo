import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import './styles/App.scss';
 
import DocumentaryDebtGenerationSystem from './components/DocumentaryDebtGenerationSystem';
import DocumentationPendingDelivery from './components/DocumentationPendingDelivery';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
    
     <Route path="/Documentary-Deb-Generation-System" element={<DocumentaryDebtGenerationSystem />} />
     <Route path="/Documentation-Pending-Delivery" element={<DocumentationPendingDelivery />} />
  
  
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;