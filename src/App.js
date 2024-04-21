import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Public from "./pages/public/Public";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import AboutUs from "./pages/public/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Webshop from "./pages/public/Webshop";
import TermekOldal from "./pages/public/TermekOldal";
import Regisztracion from "./pages/Regisztracio";
import Adatlap from "./pages/AdatLap";
import Admin from './pages/admin/Admin';
import FelhasznalokLista from './pages/admin/FelhasznalokLista';
import NovenyekFelvitel from './pages/admin/NovenyekFelvitel';
import TermekekLista from './pages/admin/TermekekLista';
import Kosar from "./components/public/Kosar";
import Rendelesek from "./pages/public/Rendelesek";

function App() {
  return (
    //<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="Main" element={<Main />} />
        <Route path="Public" element={<Public />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Webshop" element={<Webshop />} />
        <Route path="Login" element={<Login />} />
        <Route path="regisztracio" element={<Regisztracion />} />
        <Route path="adatlap" element={<Adatlap />} />
        <Route path="rendelesek" element={<Rendelesek />} />

        <Route path="Kosar" element={<Kosar />} />
        <Route path="termekOldal" element={<TermekOldal />}
          component={TermekOldal}
        />
        <Route path="Admin" element={<Admin />} />

          <Route path="NovenyekFelvitel" element={<NovenyekFelvitel />} />
          <Route path="TermekekLista" element={<TermekekLista />} />
          <Route path="FelhasznalokLista" element={<FelhasznalokLista />} />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    // </BrowserRouter>
  );
}

export default App;