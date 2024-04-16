import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
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
import useAuthContext from "./context/AuthContext";
import { KosarbaProvider } from "./context/KosarbaContext";

function App() {

  const { user, getUser } = useAuthContext();
  useEffect(() => {
    //console.log(user)
    if (!user) {
      getUser();
    }
  });


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

        <Route path="Kosar" element={<KosarbaProvider><Kosar /></KosarbaProvider>} />

        <Route path="termekOldal" element={<TermekOldal />}
          component={TermekOldal}
        />
        <Route path="*" element={<NoPage />} />

        {user && user.permission <= 1 && (
          <>
            <Route path="Admin" element={<Admin />} />
            <Route path="Admin/NovenyekFelvitel" element={<NovenyekFelvitel />} />
            <Route path="Admin/TermekekLista" element={<TermekekLista />} />
            <Route path="Admin/FelhasznalokLista" element={<FelhasznalokLista />} />
          </>
        )}
      </Route>
    </Routes>
    // </BrowserRouter>
  );
}

export default App;