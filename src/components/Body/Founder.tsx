import React from 'react'
import imgOffice from '../../assets/wassim-chouak-kJCAKWTH6u4-unsplash.png'
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'

const Section = styled.section`
  padding-bottom: 80px;
  padding-top: 80px;
  background: #003468;
  color: #011240;

  @media (max-width: 768px) { 
    padding: 2.5rem 1.5rem;
 }
`

const ColorStyle = styled.p`
  color: #9aa8bd;
`

const ParentDiv = styled.div`
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
`

const ParagraphStyle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0px;
  font-family: 'Open Sans', sans-serif;
  align-text: left;
  background-color: transparent;


  @media (max-width: 768px) { 
    padding: 0rem 0rem;
    align-text: center;
    background-color: transparent;
    font-size: 1rem;
 }
`

const H4 = styled.p`
  margin-top: 10px;
  color: #fba502;
`

const Founder: React.FC = () => {
  return (
    <>
      <Section className="section is-paddingless-horizontal">
        <div className="container content" >
          <div className="columns" >
          <div className="column is-half" id="founderImgs">
              <img className="content" src={imgOffice} height="100%" width="100%" id="imgCover" alt="office" />
            </div>
            <div className="column is-half">
              <ParentDiv className="contents" id="contentSides">
                <ColorStyle className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Our Pioneers Message</ColorStyle>
                <ParagraphStyle className="has-text-lefts ">
                  <blockquote style={{ backgroundColor: "transparent", fontWeight: "bold", borderLeftWidth: "0px" }}>“Our vision has always been and is to resource and supply sufficient oil and petroleum resources to enable our 
                    partners and clients throughout the region to function in a time to great stress and uncertainty. 
                  During the global pandemic season, we've further reiterated our ambition to scale our business and acquire more clients, 
                  and therefore create job opportunities for the right talent to join our growing SRP family.”</blockquote>  
                </ParagraphStyle>
                <br />
                <ParagraphStyle className="has-text-left">
                  Brian, Tirelo && Keabetswe
                </ParagraphStyle>
                <H4 className="subtitle is-6 has-text-left has-text-weight-semibold">
                  The Founding Team
                </H4>
              </ParentDiv>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}

const iStyle = {
  paddingBottom: '120px',
  paddingTop: '20px',
}

export default Founder;
