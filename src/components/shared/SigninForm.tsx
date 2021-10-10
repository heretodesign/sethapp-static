import React from 'react'
import Navbar from '../../components/Header/Navbar'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styled from 'styled-components'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { number } from 'yup/lib/locale';
import { Link, Redirect, useHistory } from "react-router-dom"

const phoneRegExpe = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameFormat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const numberFormat = /^\((\d{2})\) [0-9]{4}-[0-9]{4}$/;
const mobileFormat = /^[0-9]{4}-[0-9]{4}$/;
const phoneRegExp = /^[0-9\- ]{5,12}$/;
const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a valid email format!")
        .required("Email is required!"),
    password: Yup.string().min(5, 'Message must be at least 6 characters').max(50).required("")
});

export interface FormDataProps {
    email: string,
    password: string,
}

const SigninForm: React.FC = () => {
    const {register, handleSubmit, errors} = useForm<FormDataProps>({
        resolver: yupResolver(SigninSchema)
    })

    const roleBasedRedirect = (role: string) => {
        if (role === 'admin') {
            window.location.href = '/admin/dashboard';
            // window.location.href = '/adminuser/contactus/';
        } else {
            window.location.href = '/super-admin/contactus/';
        //   history.push("/super-admin/dashboard");
        }
    };

    const onSubmit = async (data: FormDataProps, event: any) => {
        event.preventDefault()
        console.log(data)
        try {
            console.log('inside ttryyy')
            const BaseURL = "http://localhost:7000/api/v1/users/login"
            const response: any  = await axios.post(BaseURL, data);
            console.log('FIRE response', response)
            /**
             * @saveTheTokenToSessionStorage @cookie
             */
            const { token } = response.data
            if (token) {
                sessionStorage.setItem("session_token", JSON.stringify(token));
            }
            
            /*** @callRoleBasedRedirect */
            const { role } = response.data.user
            roleBasedRedirect(role)

        } catch (error) {
            console.log('FORMDATA SUBMISSION FAILED', error.message);
        }
    }

    const signinForm = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="field">
                        <div className="control">
                            <Input className="input is-info is-medium" 
                                ref={register({ required: true })}
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Email*" 
                            />
                            {
                            errors.email && <div className="error">Enter your Valid Email</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="field">
                        <div className="control">
                            <input className="input is-info is-medium" 
                                ref={register({ required: true })}
                                type="password" 
                                id="password"
                                name="password"
                                placeholder="Password*" 
                            />
                            {
                                errors.password && <div className="error">Enter your Valid Password</div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="field">
                        <div className="control">
                            <InputBtn className="button is-medium is-fullwidth" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

    return (
        <>
            <Navbar />
            <section className="section container justify-content-center"  id="servicesPage">
            <div className="container grid is-large" id="contAboutPage">
                    <div className="firstssection">
                        <div className="content">
                            <div className="columns">
                            <div className="column is-three-fifths is-offset-one-fifth">
                                <MainPara className="has-text-weight-semibold has-text-center">
                                Admin Sign In
                                </MainPara>
                            </div>
                            </div>
                            <br />
                            {signinForm()}
                            <br />
                            <div className="column is-three-fifths is-offset-one-fifth">
                                <Link to="/forgot-password" className="button is-small is-danger is-outlined">
                                    Forgot Password
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Input = styled.input`
    border-color: #003468;
`
const InputBtn = styled.input`
    background: #003468;
    color: white;
    margin-top: 20px;

    &:hover {
        color: #003468;
        background: white;
        border-color: #003468;
    }
`
const MainPara = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    color: #003468;
    margin-top: -20px;
`
const TextPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const TextLabel = styled.label`
  font-size: 1.2rem;
  color: #003468;
`
const Button = styled.p`
    background: #003468;
    color: white;
    margin-top: 20px;
`
export default SigninForm
