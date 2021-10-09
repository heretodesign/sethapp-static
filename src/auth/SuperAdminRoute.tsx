import React from 'react'
import { Route, Redirect, RouteProps} from 'react-router-dom';
// import { isAuth } from '../services/ApiService';
import { isAuthenticated } from '../services/AuthService';

interface SuperAdminProps extends RouteProps {
    component: any;
    children?: React.ReactNode;
    isAuthenticated?: boolean;
}
const SuperAdminRoute = ({ component: Component, ...rest }: SuperAdminProps) => {
    <Route
        {...rest}
        render={props =>
            // isAuthenticated() && isAuthenticated().user.role === 'superadmin' 
            isAuthenticated() && isAuthenticated() === true
            ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
}

export default SuperAdminRoute;
