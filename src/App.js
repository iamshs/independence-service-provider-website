
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Pages/Blogs/Blogs';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import NotFound from './components/Pages/NotFound/NotFound';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/aboutme' element={<AboutMe></AboutMe>} />
        <Route path='/checkout/:Id' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        } />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
