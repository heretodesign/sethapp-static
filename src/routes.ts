import React, { lazy, Suspense }  from 'react';
import { Route, Switch } from "react-router-dom"
import IRoute from './interface/route'

const Signin = lazy(() => import('./auth/Signin'));
const ForgotPassword = lazy(() => import('./auth/ResetPassowrd'));
const BusinessCustomers = lazy(() => import('./pages/BusinessCustomers'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Apply = lazy(() => import('./pages/Apply'));
const Home = lazy(() => import('./pages/HomePage'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const NoMatchRoute = lazy(() => import('./components/pageNotFound/NoMatchRoute'));
const Contact = lazy(() => import('./pages/Contact'));

const AdminDashboard = lazy(() => import('./_AdminUser/Dashboard')); 
const CreateProfile = lazy(() => import('./_AdminUser/Profile/CreateProfile'));
const ListProfile = lazy(() => import('./_AdminUser/Profile/ListProfile'));
const EditProfile = lazy(() => import('./_AdminUser/Profile/EditProfile'));
const ViewProfile = lazy(() => import('./_AdminUser/Profile/ViewProfile'));

const ListContacts = lazy(() => import('./_AdminUser/ContactUs/ListContacts'));
const ViewContacts = lazy(() => import('./_AdminUser/ContactUs/ViewContacts'));
const ReplyContacts = lazy(() => import('./_AdminUser/ContactUs/ReplyContacts'));

const EditApplications = lazy(() => import('./_AdminUser/JobApplications/EditApplications'));
const ListApplications = lazy(() => import('./_AdminUser/JobApplications/ListApplications'));
const ViewApplications = lazy(() => import('./_AdminUser/JobApplications/ViewApplications'));

const SuperAdminDashboard = lazy(() => import('./_SuperAdmin/Dashboard'));
const ListEmployee = lazy(() => import('./_SuperAdmin/Employees/ListEmployee'));
const CreateEmployee = lazy(() => import('./_SuperAdmin/Employees/CreateEmployee'));
const EditEmployee = lazy(() => import('./_SuperAdmin/Employees/EditEmployee'));
const ViewEmployee = lazy(() => import('./_SuperAdmin/Employees/ViewEmployee'));

import * as paths from "./paths";


// const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
// const SuperAdminDashboard = './auth/SuperAdminDashboard';
// const AdminUserRoute = './auth/AdminUserRoute';

const routes: IRoute[] = [  
    {
        path: '/list/employees',
        name: 'List Employee',
        component: ListEmployee,
        exact: true
    },
    {
        path: '/create/employees',
        name: 'Create Employee',
        component: CreateEmployee,
        exact: true
    },
    {
        path: '/edit/employees/:id',
        name: 'Edit Employee',
        component: EditEmployee,
        exact: true
    },
    {
        path: '/view/employees/:id',
        name: 'View Employee',
        component: ViewEmployee,
        exact: true
    },

    // old route
    // {
    //     path: 'app',
    //     component: SuperAdminDashboard,
    //     children: [
    //         /** SuperAdmin create new employees */
    //         { path: '/list/employees',  component: ListEmployee },  
    //         { path: '/create/employees',  component: CreateEmployee },  
    //         { path: '/edit/employees/:id',  component: EditEmployee },  
    //         { path: '/view/employees/:id',  component: ViewEmployee },
    //         // { path: '/delete/employees/:id',  component: DeleteEmployee }
    //     ]
    // },
    // {
    //     path: 'app',
    //     component: AdminDashboard,
    //     children: [
    //         /** Admin User/Employee can edit their own profile */
    //         { path: '/list/admin-profile', component: ListProfile },
    //         { path: '/view/admin-profile/:id', component: ViewProfile },
    //         { path: '/create/admin-profile', component: CreateProfile },
    //         { path: '/edit/admin-profile/:id', component: EditProfile },
    //         // { path: '/delete/admin-profile/:id', component: DeleteProfile },

    //         // { path: '/setting', component: Setting },

    //         /** Admin list all contact dynamic data */
    //         { path: '/contacts/mail',  component: ListContacts },  
    //         { path: '/contacts/mail/:id',  component: ViewContacts },  
    //         { path: '/contacts/mail/:id',  component: ReplyContacts },  
    //         /** Show all job applications */
    //         { path: '/list-all/job-application',  component: ListApplications },  
    //         { path: '/view/job-application/:id',  component: ViewApplications },  
    //         { path: '/respond/job-application',  component: EditApplications },  
    //         { path: '/editemployee/:id', exact: true,  component: EditEmployee }, 
    //         { path: '404/page-not-found',  component: NoMatchRoute }, 
    //     ]
    // },
    // {
    //     path: '/',
    //     element: MainLayout,
    //     children: [
    //         { path: '/reset-password', element: ForgotPassword },  
    //         { path: '/signin', element: Signin },  
    //         { path: '/business-customers', element: BusinessCustomers },  
    //         { path: '/about-us', element: About },  
    //         { path: '/careers', element: Careers },  
    //         { path: '/appply-for-role', element: Apply },  
    //         { path: '/footer', element: Footer },  
    //         { path: '/contact-us', element: Contact },  
    //         { path: '/home', element: Home },
    //         { path: '404/page-not-found',  component: NoMatchRoute }, 
    //     ]
    // }


    // { path: '/reset-password', component: ForgotPassowrd },  
    // { path: '/signin', component: Signin },  
    // { path: '/business-customers', component: BusinessCustomers },  
    // { path: '/about-us', component: About },  
    // { path: '/careers', component: Careers },  
    // { path: '/appply-for-role', component: Apply },  
    // { path: '/footer', component: Footer },  
    // { path: '/contact-us', component: Contact },  
    // { path: '/home', component: Home },  

    // /** Admin User/Employee can edit their own profile */
    // { path: '/list/admin-profile', component: AdminListProfile },
    // { path: '/create/admin-profile', component: AdminCreateProfile },
    // { path: '/edit/admin-profile/:id', component: AdminEditProfile },
    // { path: '/delete/admin-profile/:id', component: AdminDeleteProfile },
    // { path: '/setting', component: setting },  

    // /** SuperAdmin create new employees */
    // { path: '/list/employees',  component: ListEmployee },  
    // { path: '/create/employees',  component: CreateEmployee },  
    // { path: '/edit/employees',  component: EditEmployee },  
    // { path: '/delete/employees',  component: DeleteEmployee },  
    // /** Admin list all contact dynamic data */
    // { path: '/contacts/mail',  component: Contacts },  
    // /** Show all job applications */
    // { path: '/list/job-application',  component: JobApplication },  

    // { path: '/editemployee/:id', exact: true,  component: editemployee }, 

    // { path: '404/page-not-found',  component: NoMatchRoute }, 
];  
  
export default routes;