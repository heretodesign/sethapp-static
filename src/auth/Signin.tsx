
import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link, Redirect, useHistory } from "react-router-dom"
import styled from 'styled-components'
import imgOffice from '../assets/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg'
import Navbar from '../components/Header/Navbar'
import { faAddressCard, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ApiService from '../services/ApiService'
import ContactForm from '../components/shared/ContactForm'
import { authenticate, isAuthenticated } from '../services/AuthService'

const LinkBtn = styled(Link)`
  color: #003468;
  background: white;

  @include tablet {
    font-size: 1.2rem;
    margin-top: 1px;
    background: #fba502;
  }
	@media (max-width: 768px) { 
		width: 450px; 
		padding: 10px;
	}

  @include phone {
    font-size: 1rem;
    margin-top: 1px;
  }

  // &:hover {
  //   background-color: #003468;
  //   color: white;
  // }
`

const Section = styled.section`
  background: #003468;
  color: white;
`
const HeaderTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 0px;
  color: #fff;
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
const Response = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 20px;
  font-weight: bold;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const ResHeader = styled.ul`
  margin-top: 20px;
  color: #fff;
`
const ResParagraph = styled.p`
  margin-top: 20px;
  color: #fff;
`
const ParagraphSt = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const TextColor = styled.p`
  color: #003468;
`
const TextTitleColor = styled.p`
  color: #003468;
  font-size: 1.4rem;
  font-weight: bold;
`
const Button = styled.p`
    background: #003468;
    color: white;
    margin-top: 20px;
`
const Input = styled.input`
    border-color: #003468;
    // color: white;
`
const bkStyle = {
    background: '#003468',
    color: 'white'
}


const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory()

  const roleBasedRedirect = (role: string) => {
    if (role === 'admin') {
      history.push("/admin/dashboard");
    } else {
      history.push("/super-admin/dashboard");
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const BASE_URL = `${process.env.REACT_APP_API_ENDPOINT}/contacts`
    console.log(BASE_URL)
    const URL = 'http://localhost:7000/api/v1/users/login'
    axios({
      method: 'POST',
      url: `${URL}`,
      data: { email, password }
    })
      .then(response => {
        console.log('SIGNIN SUCCESS', response);
        console.log('TOKEN', response.data.token);
        console.log('ROLE', response.data.user.role);
        debugger

        // save the response (user, token) locastorage/cookie
        // authenticate(response, () => {
        //   setValues({
        //     email: '',
        //     password: '',
        //   });

        
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
      })
      .catch((error: { response: { data: { error: ToastContent } } }) => {
        console.log('SIGNIN ERROR', error.response.data);
        // setValues({ ...values });
        toast.error(error.response.data.error);
      });
  };


  const signinForm = () => (
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
                onChange={(e) => setEmail(e.target.value)}
                // onChange={handleChange('email')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="field">
            <div className="control">
              <TextLabel className="text-muted">Password</TextLabel>
              <Input
                type="password"
                className="input is-medium"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                // onChange={handleChange('password')}
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
        <section className="section container justify-content-center"  id="servicesPage">
        <div className="container grid is-large" id="contAboutPage">
                <div className="firstssection">
                    <div className="content">
                        <ToastContainer />
                        {/* {isAuth() ? <Redirect to="/" /> : null} */}
                        {/*{JSON.stringify({ email, password })}*/}
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



export default Signin;
