import Loading from '../../../Sheard/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Sheard/Hooks/useAuth';
import useTrainer from '../../../Sheard/Hooks/useTrainer';

const TrainerRouter = ({children}) => {
    const {user,loader} = useAuth()
    const {isTrainer, isLoading} = useTrainer()
    const location = useLocation()
    if(loader || isLoading){
        return <Loading/>

    }
    if(user && isTrainer){
       return children
    }
    return <Navigate state={location.pathname} to='/login'/>;
};

export default TrainerRouter;