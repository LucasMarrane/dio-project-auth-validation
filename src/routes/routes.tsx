import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

import { Login } from '../pages/Auth/Login/Login.component';
import { Logon } from '../pages/Auth/Logon/Logon.component';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Logon />,
    },

    {
        path: '*',
        element: <NaoEncontrado />,
    },
]);

function NaoEncontrado() {
    return (
        <div>
            <h2>Pagina não encontrada!</h2>
            <p>
                <Link to='/'>Ir para a Home</Link>
            </p>
        </div>
    );
}

export function Routes() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
