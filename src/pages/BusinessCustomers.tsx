import React from 'react'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import Navbar from '../components/Header'
import imgOffice from '../assets/danilo-alvesd-AzqJSCPkZkI-unsplash.jpg'
import newD from '../assets/dimitry-anikin-ATyawSn-NsE-unsplash.png'
import mine from '../assets/emily-rusch-6dCicDMhMjk-unsplash.png'
import gas from '../assets/jay-skyler-4vkqO73C7O8-unsplash.jpg'
import gc from '../assets/justice-hubane-tyCcpbkgaR4-unsplash.png'
import ban from '../assets/pexels-ivan-3089684.jpg'
import coo from '../assets/coo.jpeg'
import ceo from '../assets/ce.jpeg'
import finance from '../assets/ti.jpeg'
import marketing from '../assets/marketing.jpeg'

const HeaderTitle = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #fff;
`
const TopPara = styled.p`
  color: #9aa8bd;
  font-size: 14px;
  letter-spacing: 1.2px;
`
const MainPara = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: -20px;
`
const CardParagraph = styled.p`
  color: #003468;
  text-align: left;
  font-size: 1.1rem;
  margin-top: 15px;
`
const BusinessCustomers = () => {
    return (
        <>
            <Navbar />
            <Section className="section is-paddingless-horizontal">
                <br />
                <br />
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                            <div className="columns">
                                <div className="column">
                                <div className="content">
                                    <TopPara className="subtitle is-6 has-text-left is-uppercase">Successful together</TopPara>
                                    <HeaderTitle className="subtitle has-text-left is-2">To all our customers</HeaderTitle>
                                    <MainPara className="has-text-left">
                                        Our collective team effort is oriented and geared towards providing our dedicated customers with a wide range of products and services covering the entire energy chain. 
                                    <br />
                                    <br />
                                        By committing to enable better energy that is accessible to cities and remote regions alike, we are aligned with the needs of our customers
                                        – both businesses and consumers – and able to offer them increasingly innovative, high quality solutions. 
                                    </MainPara>
                                </div>
                                </div>
                                <div className="column is-half">
                                <img className="content" src={ban} id="imgCover" alt="office" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* <section className="section is-paddingless-horizontal">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <Div className="img seth-customers">
                                        <div className="img ">
                                            <div className="d">

                                            </div>
                                            <Paragraph>sdcasdcasdc</Paragraph>
                                        </div>                                        
                                    </Div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                            <div className="columns">
                                <div className="column ">
                                    <div className="content" id="contentSide">
                                {/* <ColorHeader className="subtitle is-2">To all our customers</ColorHeader> */}
                                <div className="content">
                                <ColorStyle>Providing Tailored Solutions</ColorStyle>
                                </div>
                                {/* <Paragraph className="has-text-left">
                                    Our collective team effort is oriented and geared towards providing our dedicated customers with a wide range of products and services covering the entire energy chain. 
                                    <br />
                                    <br />
                                        By committing to enable better energy that is accessible to cities and remote regions alike, we are aligned with the needs of our customers
                                     – both businesses and consumers – and able to offer them increasingly innovative, high quality solutions. 
                                </Paragraph> */}
                                <div className="content">
                                <ColorStyle>Solutions for businesses</ColorStyle>
                                </div>
                                <Paragraph className="has-text-left">
                                    <ul>
                                        <li>
                                            Take full responsibility for multiple categories, maintain our assortment, and fulfill all the day-to-day problem solving and communication 
                                        </li>
                                        <li>
                                            Use a data-first approach to build relationships with suppliers and expand our mobile-store assortment
                                        </li>
                                        <li>
                                            Establish a category strategy and promotional road map
                                        </li>
                                        <li>
                                            Ensure that our customers find products at the most competitive price
                                        </li>
                                    </ul>
                                </Paragraph>
                                <br />
                                <br />
                                <div className="content">
                                    <div className="columns">
                                        <div className="column is-one-third">
                                            <div className="card card-shadow">
                                            <div className="card-image">
                                                <img src={imgOffice} alt="Placeholder image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                <div className="media-content">
                                                    <LinkBtn to="/careers-at-srp" className="title is-4 is-underlined has-text-centered">Power</LinkBtn>
                                                    {/* <CardParagraph className="has-text-left">
                                                        Discover the impact you can make with a career at Seth Resources.
                                                    </CardParagraph> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="column is-one-third">
                                <div className="card">
                                <div className="card-image">
                                    <img src={mine} alt="Placeholder image" />
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                    <div className="media-content">
                                        <LinkBtn to="" className="title is-4 is-underlined has-text-centered">Aviation</LinkBtn>
                                        {/* <CardParagraph className="has-text-left">
                                            Discover our public content releases or find media relations teams contact details. 
                                        </CardParagraph> */}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="card">
                                <div className="card-image">
                                    <img src={newD} alt="Placeholder image" />
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                    <div className="media-content">
                                        <LinkBtn to="" className="title is-4 is-underlined has-text-centered">Mining</LinkBtn>
                                        {/* <CardParagraph className="has-text-left">
                                            Discover our passion to be an eco-friendly driven company and our awareness to make a positive contribution towards climate change. 
                                        </CardParagraph> */}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        {/* <div className="content">
                                <ColorStyle>Solutions for customers</ColorStyle>
                                </div>
                                <Paragraph className="has-text-left">
                                The success of our customers is our success. Our solution is to supply oil and petroleum to enable our customers to achieve their intended business.
                                </Paragraph>
                                <div className="content">
                            <div className="columns">
                                <div className="column is-one-third">
                                    <div className="card card-shadow">
                                    <div className="card-image">
                                        <img src={gas} alt="Placeholder image" />
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                        <div className="media-content">
                                            <LinkBtn to="/careers-at-srp" className="title is-4 is-underlined has-text-centered">Careers</LinkBtn>
                                            <CardParagraph className="has-text-left">
                                            Discover the impact you can make with a career at Seth Resources.
                                            </CardParagraph>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="column is-one-third">
                                    <div className="card">
                                    <div className="card-image">
                                        <img src={mine} alt="Placeholder image" />
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                        <div className="media-content">
                                            <LinkBtn to="" className="title is-4 is-underlined has-text-centered">Media</LinkBtn>
                                            <CardParagraph className="has-text-left">
                                            Discover our public content releases or find media relations teams contact details. 
                                            </CardParagraph>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="column is-one-third">
                                    <div className="card">
                                    <div className="card-image">
                                        <img src={newD} alt="Placeholder image" />
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                        <div className="media-content">
                                            <LinkBtn to="" className="title is-4 is-underlined has-text-centered">Sustainability</LinkBtn>
                                            <CardParagraph className="has-text-left">
                                            Discover our passion to be an eco-friendly driven company and our awareness to make a positive contribution towards climate change. 
                                            </CardParagraph>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="content">
                                {/* <ColorStyle>What are the SRP Perks</ColorStyle> */}
                            </div>
                                    <Paragraph className="has-text-left">
                                    {/* <ul>
                                        <li>
                                            Lubricants:                            
                                        </li>
                                        <li>
                                            Fuels:                             
                                        </li>
                                        <li>
                                            Energy Efficiency: 
                                        </li>
                                        <li>
                                            No hierarchical thinking: Be your own leader!
                                        </li>
                                        <li>
                                            Participate in team events, Christmas or summer parties, and cozy barbecues
                                        </li>
                                    </ul> */}
                                    </Paragraph>
                                    {/* <Paragraph>Up for the challenge? Then join us and be part of the SRP team!</Paragraph> */}
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

const Div = styled.div`
    height: 410px;
    padding: 0 100px 0 100px;
    // background: #003468;
`
const ColorHeader = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #003468;
`
const Section = styled.section`
  background: #003468;
  color: white;
`
const Paragraph = styled.p`
  color: #003468;
  font-size: 1.2rem;
`
const P = styled.p`
  color: #003468;
  background: white;
  font-size: 1.4rem;
`
const ColorStyle = styled.p`
  color: #003468;
  font-size: 1.4rem;
  font-weight: bolder;
`
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
`
const TextPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`
const Button = styled.button`
  color: #003468;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 10px;

  // :hover: {
  //   color: #fba502
  // }
`
const cardTitle = {
    color: '#003468',
    textDecoration: 'underline',
    textAlign: 'center',
    marginBottom: '10px'
  }
  const AboutRoles = {
    color: '#003468',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '10px'
}


const CardSection = styled.section`
  // background-color: #f1f6fe;
  background-color: #e3f4fc;
  card-color: transparent;
  color: #003468;
`



const AboutPara = styled.p`
  font-size: 1.2rem;
  color: #003468;
`


const CardDiv = styled.div`
  border-style: outset;
  border-bottom-color: #041B61;
`
const ParagraphSty = styled.p`
  color: #003468;
  font-size: 1.2rem;
  margin-top: 10px;
`
const CardParagraphs = styled.p`
  color: #003468;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) { 
    color: #003468;
    font-size: 1rem;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
	}
`
const ColStyle = styled.p`
  color: #003468;
  font-size: 2.4rem;
  font-weight: bolder;
  margin-bottom: 0px;
`
const Inside = styled.p`
  color: #003468;
`
const CardTit = styled.p`
  color: #003468;
  font-weight: bold;
`
const AboutGet = styled.p`
  font-size: 2.6rem;
  margin-top: 0px;
  color: #003468;
`
const AboutRole = styled.p`
  font-size: 2.6rem;
  margin-bottom: 10px;
  color: #003468;
  text-align: center;
  text-decoration: underline;
`

export default BusinessCustomers
