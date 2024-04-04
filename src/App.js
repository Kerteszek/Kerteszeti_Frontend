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
import TermekOldal from './components/public/webshop/TermekOldal';
import Admin from './pages/admin/Admin';
import FelhasznalokLista from './pages/admin/FelhasznalokLista';
import NovenyekFelvitel from './pages/admin/NovenyekFelvitel';
import TermekekLista from './pages/admin/TermekekLista';



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
          <Route path="Admin" element={<Admin />} />
          <Route path="Admin/NovenyekFelvitel" element={<NovenyekFelvitel />} />
          <Route path="Admin/TermekekLista" element={<TermekekLista />} />
          <Route path="Admin/FelhasznalokLista" element={<FelhasznalokLista />} />
          <Route path="termekOldal" element={<TermekOldal />} component={TermekOldal} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
