import React from 'react'
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom"
import imgOffice from '../../assets/windows-30XRQT0MXqs-unsplash.jpg'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'
import Navbar from '../Header/Navbar'

export const ApplicationModal = () => {
    return (
        <>
            <Navbar />
            <section className="section is-paddingless-horizontal" id="servicesPage">
                <div className="container grid is-large" id="contAboutPage">
                <div className="firstssection">
                    <div className="content">
                        <div className="columns">
                        <div className="column">
                            <div className="content">
                            <ServicesGet className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Thank you for expressing interest in joining us</ServicesGet>
                            <ServicesTitle className="subtitle has-text-left is-2">Job Application Successful</ServicesTitle>
                            <ServicesParagraph className="has-text-left">
                                Thank you for expressing interest in joining the Team at Seth Resources. Our recruiting team will contact you swiftly to start your onboarding process. 
                                <br />
                                <br />
                                <br />
                                <LinkButton 
                                    to="/apply-for-this-job" 
                                    className="title has-text-centered" 
                                    >
                                    Go Back
                                </LinkButton> {' '}{' '}
                                <LinkButtonOne 
                                    to="/" 
                                    className="title has-text-centered" 
                                    >
                                    Redirect to Home Page
                                </LinkButtonOne>
                                <br />
                                <br />

                            </ServicesParagraph>
                            </div>
                        </div>
                        <div className="column is-half">
                            <img className="content" src={imgOffice} id="imgCover" alt="office" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const LinkButtonOne = styled(Link)`
    background: #003468;
    color: white;
    font-size: 1.2rem;
    padding: 10px;

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

    &:hover {
        background-color: #003468;
        color: white;
    }
    
`

const LinkButton = styled(Link)`
    background: #003468;
    color: white;
    font-size: 1.2rem;
    padding: 10px;

    &:hover {
        color: #003468;
        background: white;
        border-color: #003468;
    }
`

const LinkBtn = styled(Link)`
  color: white;
  background: #003468;

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

  &:hover {
    background-color: #003468;
    color: white;
  }
`

const Button = styled.button`
  color: #003468;
  text-decoration: underline;
  text-align: center;
  font-size: 1.2rem;
  :hover: {
    color: #fba502
  }
`
const ServicesParagraph = styled.p`
  font-size: 1.2rem;
  margin-top: -10px;
  color: #003468;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    text-align: center;
    color: #003468;
    margin-top: -10px;
    font-family: 'Open Sans', sans-serif;
	}
`
const ServicesTitle = styled.p`
  font-size: 2.6rem;
  color: #003468;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 768px) { 
    color: #003468;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const ServicesGet = styled.p`
  margin-top: 0px;
  color: #011240;
  font-family: 'Open Sans', sans-serif;
`


export default ApplicationModal