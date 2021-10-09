import React from 'react'
import { Route, Redirect, RouteProps} from 'react-router-dom';
import { isAuthenticated } from '../services/AuthService';

export interface AdminProps extends RouteProps {
    role?: string;
    component: any;
    children?: React.ReactNode;
    isAuthenticated?: boolean;
}

const AdminUserRoute: React.FC<AdminProps> = ({ component: Component, ...rest }: any) => <Route
    {...rest}
    render={props =>
        // isAuthenticated() && isAuthenticated() === true && role: string === 'admin' ? (
        isAuthenticated() && isAuthenticated() === true
            ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }} />
            )}
>
</Route>

export default AdminUserRoute


// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../../utils';

// export const PublicRoute = ({ component: Component, restricted, ...rest }: any): JSX.Element => {
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 isLogin() && restricted ? <Redirect to="/dashboardBranch" /> : <Component {...props} />
//             }
//         />
//     );
// };

// export default PublicRoute;