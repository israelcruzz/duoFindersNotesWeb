import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/authContext'
import { AuthContext } from '../context/authContext';

export function Routes() {
    const { data } = useContext(AuthContext) as Context;

    return (
        <BrowserRouter>
            { data?.user ? <AppRoutes /> : <AuthRoutes /> }
        </BrowserRouter>
    )
}