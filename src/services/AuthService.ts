import axios from 'axios';
import React from 'react';
import LoadingToRedirect from '../auth/LoadingToRedirect';
import { UserProps } from '../interface'

export interface IAuthenticateProps {
    data: string;
    next: () => void;
}
export const authenticate = ({ data, next }: IAuthenticateProps) => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
};

/**
 *  @userLoginFn @parameters email: string, password: string
 * @setsessionStorage - set the credentials to sessionStorage
 * @getsessionStorage - get the token from sessionStorage
 * */

export interface IUserLoginProps {
    username: string;
    password: string;
}
// export const signInFn = async ({ username, password }: IUserLoginProps) => {
//     try {
//         const user = await Auth.signIn(username, password);
//         return user;
//     } catch (error) {
//         console.log('error signing in', error);
//     }
// };

/**
 * @isAthenticated
 */

export const isAuthenticated = () => {
    const store = sessionStorage.getItem('session_token');
    if (store !== null) {
        return true;
    }
    return false;
};

export const userSignIn = ({email, password}: UserProps) => {
    const URL = 'http://localhost:7000/api/v1/users/login'

    return axios.post(URL, {
        email,
        password,
      })
      .then((response) => {
        console.log('SIGNIN SUCCESS', response);
        if (response.data.accessToken) {
            sessionStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
};

/**
 * @signOut @function
 */
// export const signOutFn = async () => {
//     try {
//         await Auth.signOut();
//         sessionStorage.removeItem('session_token');
//         sessionStorage.removeItem('user_role');
//         sessionStorage.removeItem('expirationDate');
//         sessionStorage.removeItem('permission');
//         sessionStorage.clear();
//     } catch (error) {
//         console.log('error signing out: ', error);
//     }
// };

/**
 * use sessionStorage instead
 * How do we know when the user leaves the site
 */
// window.addEventListener('beforeunload', (ev) => {
//     ev.preventDefault();
//     Auth.signOut();
//     localStorage.removeItem('session_token');
//     localStorage.removeItem('user_role');
//     localStorage.clear();
// });

/**
 * How do we detect if user reloaded the site
 */
// window.onload = function () {
//     const token: any = sessionStorage.getItem('session_token');
//     if (token) {
//         sessionStorage.getItem('session_token');
//         sessionStorage.getItem('user_role');
//     }
// };
