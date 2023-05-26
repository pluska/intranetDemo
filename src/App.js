import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<div>Contenido</div>} />
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;