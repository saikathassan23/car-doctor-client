import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from './../shared/Navbar/Navbar';

const MainLayout = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
