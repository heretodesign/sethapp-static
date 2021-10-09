import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styled from 'styled-components'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { number } from 'yup/lib/locale';
import ContactUsModal from '../Modal'

const phoneRegExpe = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameFormat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const numberFormat = /^\((\d{2})\) [0-9]{4}-[0-9]{4}$/;
const mobileFormat = /^[0-9]{4}-[0-9]{4}$/;
const phoneRegExp = /^[0-9\- ]{5,12}$/;
const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

const ContactSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required!").matches(nameFormat).min(2),
    phonenumber: Yup.string().required("Phonenumber is required!").matches(phoneRegExp).min(5, 'PhoneNumber must be a positive number'),
    email: Yup.string()
      .email("Enter a valid email format!")
    //   .matches(emailFormat)
      .required("Email is required!"),
    message: Yup.string().min(5, 'Message must be at least 6 characters').max(3000).notRequired()
  });

export interface FormDataProps {
    fullname: string,
    phonenumber: string,
    email: string,
    message: string,
}

const ContactForm: React.FC = () => {
    const {register, handleSubmit, errors} = useForm<FormDataProps>({
        resolver: yupResolver(ContactSchema)
      })

    const onSubmit = async (data: FormDataProps, event: any) =>  {
        event.preventDefault()
        console.log(data)
        try {
            console.log('inside ttryyy')
            const BaseURL = "http://localhost:7000/api/v1/contacts/"
            const response: any  = await axios.post(BaseURL, data);

            console.log('FIRE response', response)
            alert('SENT')

            /** * @redirectToSuccessPage */
            // setShowModal(true);
            window.location.href = '/contact-success';

        } catch (error) {
            console.log('FORMDATA SUBMISSION FAILED', error.message);
        }
    }

    const contactUsForm = () => (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <div className="control">
                    <input className="input is-info" 
                        ref={register({ required: true })}
                        type="text" 
                        id="fullname"
                        name="fullname"
                        placeholder="First & Last Name*" 
                    />
                    {
                        errors.fullname && <div className="error">Enter your Fullname</div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input is-info" 
                        ref={register({ required: true })}
                        type="text" 
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="Phone Number*" 
                    />
                    {
                        errors.phonenumber && <div className="error">Enter your Valid Phonenumber</div>
                    }
                </div>
            </div>
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
            </div>
            <div className="field">
                <div className="control">
                    <textarea className="textarea is-info" 
                        ref={register({ required: true })}
                        id="message" 
                        name="message" 
                        placeholder="message*"
                        required 
                    />
                    {
                        errors.message && <div className="error">Message must be at least 6 characters</div>
                    }
                </div>
                <br />
                <InputBtn className="button is-large is-fullwidth" type="submit" />
            </div>
        </form>
    )

    return (
        <>
            {contactUsForm()}
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
export default ContactForm
