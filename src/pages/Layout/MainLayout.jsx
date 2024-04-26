
import { Outlet } from 'react-router-dom';
import Navber from '../../Sheard/Navber/Navber';
import Footer from '../../Sheard/Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#EEE]'>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;