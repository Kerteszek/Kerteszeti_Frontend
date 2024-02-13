import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Public from './pages/public/Public';
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import AboutUs from './pages/public/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webshop from './pages/public/Webshop';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Main" element={<Main />} />
          <Route path="Public" element={<Public />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Webshop" element={<Webshop />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
