import axios from 'axios';
import { ContactsProps, jobApplicationProps } from '../interface/'

class ApiService {

    // Contact Us Form API

    createContactUs({fullname, phonenumber, email, message}: ContactsProps) {
        const BaseURL="http://localhost:7000/api/v1/contacts"
        // const url = process.env.REACT_APP_BASE_URL + "console/projects/";
        // const BaseURL=`${process.env.SERVER_REST_API}/api/v1/contacts`
        return axios({
            method: 'POST',
            url: BaseURL,
            // url: 'http://localhost:7000/api/v1/contacts',
            data: { fullname, phonenumber, email, message }
        })
    }

    // APPLY for JOBS API
    createApplicationRole({fullname, email, phonenumber, location, profile, motivation, startdate, resume}: jobApplicationProps) {
        const BaseURL="http://localhost:7000/api/v1/applications"
        return axios({
            method: 'POST',
            url: BaseURL,
            data: { fullname, email, phonenumber, location, profile, motivation, startdate, resume }
        })
    }

    // createProduct(userId, token, product) {
    //     const BaseURL="http://localhost:7000/api/v1"
    //     return fetch(`${BaseURL}/product/create/${userId}`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             Authorization: `Bearer ${token}`
    //         },
    //         body: product
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // };
    
}

export const getContactsList = async (authtoken: string) => {
    return fetch(`${process.env.REACT_APP_API}/api/v1/contacts/`, {
        method: 'GET',
        headers: {
            authtoken,
        },  
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
}

export const getContactsData = async (authtoken: string) =>
    await axios.get(`${process.env.REACT_APP_API}/api/v1/contacts/`, {
        headers: {
            authtoken,
        },  
    }
);

export default new ApiService();