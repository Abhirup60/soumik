import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Error from "./pages/Error";
import Navbar from "./component/Navbar";
import Work from "./pages/Work";
import Education from "./pages/Education";
import AdminLayout from "./component/layout/Admin-Layout";
import AdminContact from "./pages/AdminContact";
import AdminUser from "./pages/AdminUser";
import About from './pages/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          {/* work page is skill . we will change it later*/}
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/edu' element={<Education />} />
          <Route path='*' element={<Error />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='contacts' element={<AdminContact />}/>
            <Route path='users' element={<AdminUser />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
