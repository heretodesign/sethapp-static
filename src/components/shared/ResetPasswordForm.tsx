import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styled from 'styled-components'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { number } from 'yup/lib/locale';

const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

const ContactSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter a valid email format!")
        .required("Email is required!")
    });

export interface FormDataProps {
    email: string,
}

const ResetPasswordForm: React.FC = () => {
    const {register, handleSubmit, errors} = useForm<FormDataProps>({
        resolver: yupResolver(ContactSchema)
        })

    const onSubmit = async (data: FormDataProps, event: any) =>  {
        event.preventDefault()
        console.log(data)
        try {
            console.log('inside ttryyy')
            const BaseURL = "http://localhost:7000/api/v1/users/"
            const response: any  = await axios.post(BaseURL, data);

            console.log('FIRE response', response)
            alert('SENT')
            window.location.href = '/';
        } catch (error) {
            console.log('FORMDATA SUBMISSION FAILED', error);
        }
    }

    const ResetPwdForm = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <div className="control">
                    <Input className="input is-info" 
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

                <br />
                <InputBtn className="button is-large is-fullwidth" type="submit" />
            </div>
        </form>
    )

    return (
        <>
            {ResetPwdForm()}
        </>
    )
}

const Input = styled.input`
    border-color: #003468;
`
const InputBtn = styled.input`
    background: #003468;
    color: white;

    &:hover {
        color: #003468;
        background: white;
        border-color: #003468;
    }
`
export default ResetPasswordForm
