import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { faAddressCard, faCloud, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const phoneRegExpe = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const nameFormat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const numberFormat = /^\((\d{2})\) [0-9]{4}-[0-9]{4}$/;
const mobileFormat = /^[0-9]{4}-[0-9]{4}$/;
const phoneRegExp = /^[0-9\- ]{5,12}$/;
const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;


const JobSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required!").matches(nameFormat).min(2),
    phonenumber: Yup.string().required("Phonenumber is required!").matches(phoneRegExp).min(5, 'PhoneNumber must be a positive number'),
    email: Yup.string()
        .email("Enter a valid email format!")
        .required("Email is required!"),
    location: Yup.string().required("location is required!").matches(nameFormat).min(2).max(200),
    profile: Yup.string().required("profile is required!").min(2).max(150),
    motivation: Yup.string().required("motivation is required!").min(2).max(1000),
    startdate: Yup.string().required("startdate is required!").min(2).max(100),
    resume: Yup.mixed().test("fileSize", "The File is too Large", (value) => {
        return value && value[0].size < 2000000
    }),
});

interface FormDataProps {
    fullname: string,
    phonenumber: string,
    email: string,
    location: string,
    profile: string,
    motivation: string,
    startdate: string,
    resume: string,
}

const ApplicationForm: React.FC = () => {
    const {register, handleSubmit, errors} = useForm<FormDataProps>({
        resolver: yupResolver(JobSchema)
    })
    const [filename, setFilename] = React.useState<string>('Upload Resume')
    const fileInput = React.useRef(null);

    const onSubmits = (data: any) => console.log(data)

    const onSubmit = async (data: FormDataProps, event: any) => {
        event.preventDefault()
        console.log(data)
        try {
            console.log('INSIDE')
            const formData = new FormData()
            formData.append("fullname", data.fullname)
            formData.append("phonenumber", data.phonenumber)
            formData.append("email", data.email)
            formData.append("location", data.location)
            formData.append("profile", data.profile)
            formData.append("motivation", data.motivation)
            formData.append("startdate", data.startdate)
            formData.append("resume", data.resume[0])
            
            const BaseURL="http://localhost:7000/api/v1/applications/"

            const response: any  = await fetch(BaseURL, {
                method: "POST",
                body: formData
              });
            // const response: any  = await axios.post(BaseURL, formData);
            console.log('file output', response)
            // alert(JSON.stringify(response))
            
            /** * @redirectToApplicatoionsuccess */
            window.location.href = '/application-success';

        } catch (error) {
            console.log('FORMDATA SUBMISSION FAILED', error);
        }
    }

    const handleChange = async (e: any)  => {
        const nam = e.target.name
        if (nam === "resume") {
            setFilename(e.target.files[0].name);
            // console.log(e.target.files[0].name);
        }
    };

    const applyForRole = () => (
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
                        errors.fullname && <div className="has-text-danger error">Enter your Fullname</div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input is-info" 
                        ref={register({ required: true })}
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email*" 
                        />
                        {
                            errors.email && <div className="has-text-danger error">Enter your Valid Email</div>
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
                        placeholder="phonenumber*" 
                    />
                    {
                        errors.phonenumber && <div className="has-text-danger error">Enter your Valid Country PhoneNumber</div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input is-info" 
                        ref={register({ required: true })}
                        type="text" 
                        id="location" 
                        name="location"
                        placeholder="Current Location" />
                    {
                        errors.location && <div className="has-text-danger error">Enter your current location</div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input is-info" 
                        ref={register({ required: true })}
                        type="text" 
                        id="profile" 
                        name="profile"
                        placeholder="LinkedIn Profile" />
                        {
                            errors.profile && <div className="has-text-danger error">Enter your Linkedin profile</div>
                        }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <Input className="textarea is-info" 
                        ref={register({ required: true })}
                        type="text" 
                        id="motivation" 
                        name="motivation"
                        placeholder="What made you decide to apply for this position?" />
                        {
                            errors.motivation && <div className="has-text-danger error">Enter your motivation to join us</div>
                        }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <Input className="input is-info" 
                        ref={register({ required: true })}
                        type="text" 
                        id="startdate" 
                        name="startdate"
                    placeholder="possible start date: 29 April 2021" />
                    {
                        errors.startdate && <div className="error has-text-danger">Enter your possible start date</div>
                    }
                </div>
            </div>
            <br />
            <div className="field">
                <label className="file-label">
                    <input className="file-input is-info" 
                        ref={register} 
                        type="file" 
                        name="resume"
                        id="resume" 
                        accept=".docx, .pdf, .doc, .png"
                        onChange={handleChange}
                    />
                    <span className="file-cta">
                        <Span className="file-label">
                            <span><FontAwesomeIcon icon={faCloud} size="lg" />{' '}</span>
                        <P>{filename}</P>
                        </Span>
                    </span>
                    
                    {
                        errors.resume && <div className="has-text-danger error">{errors.resume}</div>
                    }
                </label>
            </div>
            <br />
            <Button  className="button is-large is-fullwidth" type="submit">Save</Button>
        </form>
    )

    return (
        <>
            {applyForRole()}
        </>
    )
}

const P = styled.p`
    margin-left: 12px;
    font-weight: 400;
    font-size: 1.2rem;
`
const Span = styled.span`
  color: #003468;
`
const Input = styled.input`
    border-color: #003468;
`
const Button = styled.button`
    background: #003468;
    color: white;

    // &:hover {
    //     background-color: #003468;
    //     color: white;
    // }

    &:hover {
        color: #003468;
        background: white;
        border-color: #003468;
    }
`

export default ApplicationForm
