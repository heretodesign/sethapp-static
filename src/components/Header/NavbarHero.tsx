import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import logo from '../../assets/logo.png'

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
  color: #003468;
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
const LinkNav = styled(Link)`
  color: #003468;
  background: transparent;
  font-size: 1.1rem;

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

const MainTitle = styled.p`
  color: #fff;
  font-family: sans-serif;
  font-size: 3.4rem;
  font-weight: 600;

  @media (max-width: 768px) { 
    color: #fff;
    font-family: sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    text-align: center;
	}
`

const MainParagraph = styled.p`
  color: #fff;
  font-size: 1.3rem;
  text-align: left;

  @media (max-width: 768px) { 
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
	}
`

const SpanColor = styled.span`
  color: #fba502;
  font-family: sans-serif;
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: 768px) { 
    color: #fba502;
    font-family: sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    text-align: center;
	}
`

const Button = styled.button`
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

  color: #fff;
  background: transparent;

  &:hover {
    background-color: #003468;
    color: white;
  }
`
const IMG = styled.img`
  min-height: 3.25rem
`
const SpanTitle = styled.span`
  font-size: 4rem;

  @media (max-width: 768px) { 
    color: #fff;
    font-family: sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    text-align: center;
	}
`
const NavbarHero: React.FC = () => {
  return (
    <>
      <section className="hero is-primary is-medium imgLanding">
        <div className="is-paddingless-horizontal topNav">
            <div className="container-fluid grid">
                <TopDiv className="devsection">
                    <TopPara className="subtitl is-5 has-text-centered isdata">
                      <strong className="has-text-white">RSP</strong> – dedicated fuel distributer & forwarder, 
                      powering economic growth and sustainable living
                      –– +267 71572088 | 75034118 | 74237959
                    </TopPara>
                </TopDiv>
            </div>
        </div>
        <div className="hero-head">
          <nav className="navbar is-transparent" style={{ background: '#e3f4fc', color: '#003468;'}}>
            <div className="container">
              <div className="navbar-brand" id="logoStyles">
                <Link className="navbar-item"
                  to="/" style={{ background: 'transparent'}}
                  >
                  <IMG src={logo}  />
                </Link>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end" style={{ color: '#003468' }}>
                  <LinkNav 
                      to="/" 
                      className="navbar-item has-text-weight-semibold"
                       
                      >
                      Home
                  </LinkNav>
                  {/* <LinkNav 
                      to="/" 
                      className="navbar-item has-text-weight-semibold" 
                      >
                      Solutions
                  </LinkNav> */}
                  <LinkNav 
                      to="/about-us" 
                      className="navbar-item has-text-weight-semibold" 
                    >
                      About us
                  </LinkNav>
                  <LinkNav 
                      to="/business-customers" 
                      className="navbar-item has-text-weight-semibold" 
                      >
                      Customers
                  </LinkNav>
                  <LinkNav 
                      to="/careers-at-srp" 
                      className="navbar-item has-text-weight-semibold" 
                      >
                      Careers
                  </LinkNav>
                  <LinkNav 
                      to="/contact-us" 
                      className="navbar-item has-text-weight-semibold" 
                      >
                      Contact us
                  </LinkNav>
                  {/* <span className="navbar-item">
                    <LinkContact 
                        to="/contact-us" 
                        className="navbar-item button has-text-weight-semibold" 
                        >
                        Contact us
                    </LinkContact>
                  </span> */}
                  <span className="navbar-item">
                  <LinkContact 
                      to="/admin-signin" 
                      className="navbar-item button has-text-weight-semibold" 
                      >
                      <SpanText style={{ color: '#003468' }}>Employee Login</SpanText>
                  </LinkContact>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
          <div className="firstssection">
              <div className="content">
                <div className="columns">
                  <div className="column is-three-fifths">
                    <MainTitle className="subtitle has-text-left">
                      <SpanTitle>Seth Resources <SpanColor>Petroleum</SpanColor></SpanTitle> – Specializing in Petroleum Transportation
                    </MainTitle>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-half">
                    <MainParagraph className="has-text-lefts"> We are your co-pilot:
                      from remote regions to cities and beyond borders, with our fleet of delivery fuel tankers & vehicles,
                      SPR offers comfortable, realiable solutions to ensure that your petroleum delivery are made on time, every time. 
                    </MainParagraph>
                  </div>
                </div>
              </div>
              <div className="content" id="landingForm">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <LinkBtn to="/contact-us" className="button is-medium has-test-small is-fullwidth">Talk to our sales team</LinkBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default NavbarHero;
