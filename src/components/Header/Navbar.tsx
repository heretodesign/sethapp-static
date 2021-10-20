import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Span = styled.span`
    color: white;
`
const LinkContact = styled(Link)`
  color: #003468;
  background: transparent;
  font-weight: bold;
  padding-right: 25px;
  padding-left: 25px;
  border-color: #003468;
  border-width: 2px;

  &:hover {
    color: #ed6d23;
    background: transparent;
    border-color: transparent;
    border-width: 2px;
  }

  @include tablet {
    font-size: 1.2rem;
    margin-top: 1px;
    // background: #fba502;
    color: #003468;
    background: transparent;
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
const SpanText = styled.span`
  ${LinkContact} {
    background: transparent;
    color: #003468;
  }

    ${LinkContact}:hover {
        background: transparent;
        color: #ed6d23;
    }
`

const B = styled.div`
  ${LinkContact} {
  }
`
const TopDiv = styled.div`
    background: #ed6d23;
`
const Nav = styled.nav`
    background: #003468;
    color: white;
`
const TopPara = styled.p`
    font-size: 13px;
    padding: 10px;
    text-align: center;
    line-height: 16px;
    // background: #FFF3;
    color: #fff;
    width: 100%;
`
const InputBtn = styled(Link)`
    background: #003468;
    color: white;

    &:hover {
        color: #003468;
        background: white;
        border-color: #003468;
    }
`

const LinkNav = styled(Link)`
  color: #003468;
  background: transparent;
  font-size: 1.1rem;

  &:hover {
    background: transparent;
    color: #ed6d23;
  }

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

  &:hover {
    background-color: #003468;
    color: white;
  }
`

const Section = styled.section`
    background: #003468;
    color: white;
`
const IMG = styled.img`
  min-height: 3.25rem
`
const Navbar: React.FC = () => {
    return (
        <>
            <Section className="is-primary  container-fluid">
                <div className="is-paddingless-horizontal topNav">
                    <div className="container-fluid grid">
                        <TopDiv className="devsections">
                            <TopPara className="subtitl is-5 has-text-centered isdata">
                            <strong className="has-text-white">RSP</strong> – dedicated fuel distributer & forwarder, powering economic growth and sustainable living –– +267 71572088 | 75034118 | 74237959
                            </TopPara>
                        </TopDiv>
                    </div>
                </div> 

                <Nav className="navbar is-transparent" role="navigation" aria-label="main navigation" style={{ background: '#e3f4fc', color: '#003468;'}}>
                    <div className="container">
                        <div className="navbar-brand" id="logoStyles">
                            <Link className="navbar-item"
                            to="/" style={{ background: 'transparent'}}
                            >
                            <IMG src={logo} />
                            </Link>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                            </span>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-end" style={{ color: '#003468' }}>
                                <div className="navbar-item">
                                    <LinkNav 
                                        to="/" 
                                        className="navbar-item has-text-weight-semibold" 
                                        style={{ color: '#003468' }}
                                        >
                                        Home
                                    </LinkNav>
                                    <LinkNav 
                                        to="/about-us" 
                                        className="navbar-item has-text-weight-semibold" 
                                        style={{ color: '#003468' }}
                                        >
                                        About Us
                                    </LinkNav>
                                    <LinkNav 
                                        to="/business-customers" 
                                        className="navbar-item has-text-weight-semibold" 
                                        style={{ color: '#003468' }}
                                        >
                                        Customers
                                    </LinkNav>
                                    <LinkNav 
                                        to="/careers-at-srp" 
                                        className="navbar-item has-text-weight-semibold" 
                                        style={{ color: '#003468' }}
                                        >
                                        Careers
                                    </LinkNav>
                                    <LinkNav 
                                        to="/contact-us" 
                                        className="navbar-item has-text-weight-semibold"
                                        style={{ color: '#003468' }} 
                                        >
                                        Contact us
                                    </LinkNav>
                                    <div className="navbar-item">
                                        <LinkContact 
                                            to="/admin-signin" 
                                            className="navbar-item button has-text-weight-semibold" 
                                            >
                                            <SpanText style={{ color: '#003468' }}>Employee Login</SpanText>
                                        </LinkContact>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav>
            </Section>
        </>
    );
}


export default Navbar;
