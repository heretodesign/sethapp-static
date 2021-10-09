import React, { lazy, Suspense }  from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import * as PATHS from "./paths/";

const Signin = lazy(() => import('./auth/Signin'));
const SigninPage = lazy(() => import('./components/shared/SigninForm'));
const ResetPassowrd = lazy(() => import('./auth/ResetPassowrd'));
const ForgotPassword = lazy(() => import('./auth/ForgotPassword'));
const Activate = lazy(() => import('./auth/Activate'));
const NoMatchRoute = lazy(() => import('./components/pageNotFound/NoMatchRoute'));
const BusinessCustomers = lazy(() => import('./pages/BusinessCustomers'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Apply = lazy(() => import('./pages/Apply'));
const Home = lazy(() => import('./pages/HomePage'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const ContactUsModal = lazy(() => import('./components/Modal/ContactUsModal'));
const ApplicationModal = lazy(() => import('./components/Modal/ApplicationModal'));
// const SuperAdminRoute = lazy(() => import('./auth/SuperAdminRoute'));
const AdminUserRoute = lazy(() => import('./auth/AdminUserRoute'));
// const AdminUserRoute = './auth/AdminUserRoute';
const AdminDashboard = lazy(() => import('./_AdminUser/Dashboard')); 
const ListContacts = lazy(() => import('./_AdminUser/ContactUs/ListContacts'));

const CreateProfile = lazy(() => import('./_AdminUser/Profile/CreateProfile'));
const ListProfile = lazy(() => import('./_AdminUser/Profile/ListProfile'));
const EditProfile = lazy(() => import('./_AdminUser/Profile/EditProfile'));
const ViewProfile = lazy(() => import('./_AdminUser/Profile/ViewProfile'));


function App() {
    return (
        <Suspense
        fallback={
            <div className="has-text-white has-text-centered">
            <span>loading...</span>
            </div>
        }
        >
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route exact path="/careers-at-srp" component={Careers} />
                    <Route exact path="/apply-for-this-job" component={Apply} />
                    <Route exact path="/contact-us" component={Contact} />
                    <Route exact path="/about-us" component={About} />
                    <Route exact path="/business-customers" component={BusinessCustomers} />
                    <Route exact path="/admin-signin" component={Signin} />
                    <Route exact path="/admin-dashboard-signin" component={SigninPage} />
                    <Route exact path="/forgot-password" component={ResetPassowrd} />
                    <Route exact path="/reset-password/:token" component={ResetPassowrd} />
                    <Route exact path="/activate/account" component={Activate} />
                    <Route exact path="/contact-success" component={ContactUsModal} />
                    <Route exact path="/application-success" component={ApplicationModal} />

                    
                    {/* <Route exact path={PATHS.ListContacts} component={ListContacts} /> */}
                    {/* <Route exact path={PATHS.LISTCONTACTS} component={AdminDashboard} /> */}

                    <AdminUserRoute exact path="/admin/dashboard" component={AdminDashboard} />
                    {/*<AdminUserRoute exact path="/admin/list-contact-mail" component={ListContactMail} />
                     <AdminUserRoute exact path="/admin/list-contact-mail/:id" component={ViewContactMail} />
                    <AdminUserRoute exact path="/admin/list-contact-mail/:id" component={DeleteContactMail} />

                    <AdminUserRoute exact path="/admin/list-applications" component={ListApplications} />
                    <AdminUserRoute exact path="/admin/view-application/:id" component={ViewApplications} />
                    <AdminUserRoute exact path="/admin/view-application/:id" component={DeleteApplications} />

                    <SuperAdminRoute exact path="/super-admin/employees" component={CreateEmployeeDashboard} />
                    <SuperAdminRoute exact path="/super-admin/employee/:id" component={DeleteEmployeeDashboard} />
                    <SuperAdminRoute exact path="/super-admin/employee/:id" component={EditEmployeeDashboard} />
                    <SuperAdminRoute exact path="/super-admin/employees" component={ListEmployeeDashboard} /> */}

                    <Route component={NoMatchRoute} />
                </Switch>
                <Footer />
            </div>
        </Suspense>
    );
}

export default App;
