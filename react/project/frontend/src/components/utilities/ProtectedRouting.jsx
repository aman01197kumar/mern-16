
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRouting = ({token}) => {
   
    console.log(token, 'token');
    if (!token)
        return <Navigate to='login' />
    return <Outlet />
}
