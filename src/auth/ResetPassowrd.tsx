import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link, Redirect, useHistory } from "react-router-dom"
import styled from 'styled-components'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import Navbar from '../components/Header/Navbar'
import { faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ApiService from '../services/ApiService'
import ContactForm from '../components/shared/ContactForm'


const ResetPassowrd = () => {
    const history = useHistory()
    const [values, setValues] = React.useState({
      email: '',
    });
  
    const { email } = values;
  
    const handleChange = (name: any) => (event: any) => {
      console.log(event.target.value);
      setValues({ ...values, [name]: event.target.value });
    };
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      setValues({ ...values });
      const BASE_URL = 'http://localhost:4000';
      axios({
        method: 'POST',
        url: `${BASE_URL}/users/login`,
        data: { email }
      })
        .then(response => {
          console.log('SIGNIN SUCCESS', response);
  
          // save the response (user, token) locastorage/cookie
          // authenticate(response, () => {
          //   setValues({
          //     ...values,
          //     name: '',
          //     email: '',
          //     password: '',
          //     buttonText: 'Submitted'
          //   });
  
          //   isAuth() && isAuth().role === 'admin'
          //     ? history.push('/cart')
          //     : history.push('/cart');
          // });
        })
        .catch(error => {
          console.log('SIGNIN ERROR', error.response.data);
          setValues({ ...values });
          toast.error(error.response.data.error);
        });
    };
    const resetPasswordForm = () => (
      <form>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <div className="control">
                <TextLabel className="text-muted">Email</TextLabel>
                <Input
                  type="email"
                  className="input is-medium"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleChange('email')}
                />
              </div>
            </div>
          </div>
        </div>
  
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field">
              <div className="control">
                <Button
                  className="button is-medium has-text-white is-fullwidth"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );

    return (
        <>
            <Navbar />
            {/*{JSON.stringify(isAuth())}*/}

            <section className="section is-paddingless-horizontal" id="servicesPage">
                <div className="container grid is-large" id="contAboutPage">
                    <div className="firstssection">
                        <div className="content">
                                <ToastContainer />
                                {/* {isAuth() ? <Redirect to="/" /> : null} */}
                                {/*{JSON.stringify({ email, password })}*/}
                                <br />
                                <div className="columns">
                                    <div className="column is-three-fifths is-offset-one-fifth">
                                        <MainPara className="has-text-weight-semibold has-text-center">
                                        A link to reset your password will be sent to you Email 
                                        </MainPara>
                                    </div>
                                </div>
                                <br />
                                {resetPasswordForm()}
                                <br />
                                <div className="column is-three-fifths is-offset-one-fifth">
                                    <Link to="/admin-signin" className="button is-small is-info is-outlined">
                                        Employee Login
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Div = styled.div`
    height: 100vh;
`
const TextLabel = styled.label`
  font-size: 1.2rem;
  color: #003468;
`
const Button = styled.p`
  background: #003468;
  color: white;
`
const Input = styled.input`
    border-color: #003468;
    // color: white;
`
const MainPara = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #003468;
    margin-top: -20px;
`
export default ResetPassowrd
