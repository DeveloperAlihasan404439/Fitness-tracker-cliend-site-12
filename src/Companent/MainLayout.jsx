
import { Outlet } from 'react-router-dom';
import Navber from '../Sheard/Navber/Navber';

const MainLayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;