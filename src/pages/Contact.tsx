import React, { useState } from "react"
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
import ApiService from '.././services/ApiService'
import ContactForm from '../components/shared/ContactForm'

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
  font-size: 2.6rem;
  margin-top: 0px;
  color: #fff;
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: -20px;
  text-align: left;
  justify-content: left;

  @media (max-width: 768px) { 
    text-align: center;
    justify-content: center;
  }
`
const TextPara = styled.p`
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
  text-align: left;
  justify-content: left;

  @media (max-width: 768px) { 
      text-align: center;
      justify-content: center;
}
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
`
const bkStyle = {
    background: '#003468',
    color: 'white'
}

const Contact: React.FC = () => {
    let history = useHistory();
    return (
        <>
        <Navbar />
        <Section className="section is-paddingless-horizontal">
        <br />
        <br />
          <div className="container grid is-large">
              <div className="firstsectionS">
                <div className="content">
                  <div className="columns">
                    <div className="column">
                      <div className="content">
                        <TopPara className="subtitle is-6  is-uppercase">Ways to reach us</TopPara>
                        <HeaderTitle className="subtitle  is-2">Contact Us – at Seth Resources Petroleum</HeaderTitle>
                        <MainPara className="paragraph">
                          Our world class team of dedicated support will get back to within the next 2 hours upon receiving your inquiry.
                        </MainPara>
                      </div>
                    </div>
                    <div className="column is-half">
                      <img className="content" src={imgOffice} id="imgCover" alt="office" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Section>
        <section className="section is-paddingless-horizontal">
          <div className="container grid is-large">
            <div className="firstsections">
                <div className="content">
                  <TextColor className="subtitle is-2">Our dedicated team will respond within the next 24hours</TextColor>
                </div>
                <div className="content">
                  <div className="columns">
                    <div className="column">
                      <div className="content">
                        <h3 className="subtitle is-6 has-text-left is-uppercase" id="headTitle"></h3>
                        <ParagraphSt className="has-text-left">
                          Reach our team via phone: 
                        </ParagraphSt>
                        <TextPara className="has-text-left">
                          +267 71572088  or  +267 75034118   &   +267 74237959
                        </TextPara>
                        
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <TextTitleColor className="is-2">Fill all Details (email)</TextTitleColor>
                  </div>
                  <div className="columns">
                    <div className="column is-half">
                      <ContactForm />
                    </div>
                    <div className="column is-one-third">
                      <div className="card" style={bkStyle}>
                        <div className="card-content">
                          <div className="content is-medium">
                            <ResHeader className="menu-list">
                              <li>
                                <Response className="has-text-left">{' '} Our Response Process</Response>
                                <ResHeader>
                                    <li><ResParagraph>Fill in the form </ResParagraph></li>
                                    <li><ResParagraph>Email/Phone conversation </ResParagraph></li>
                                </ResHeader>
                              </li>
                            </ResHeader>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </>
    )
}




export default Contact;
