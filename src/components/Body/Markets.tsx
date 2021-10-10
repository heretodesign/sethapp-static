import React from 'react';
// import { Button, Columns} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import imgfice from '../../assets/pexels-asad-photo-maldives-240524.jpg'
import newD from '../../assets/jay-skyler-4vkqO73C7O8-unsplash.jpg'
import mine from '../../assets/pexels-ivan-3089685.jpg'
import buyer from '../../assets/sippakorn-yamkasikorn-0aJOTBQfEFE-unsplash.jpg'
import styled from 'styled-components'

const Markets: React.FC = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
            <div className="firstssection">
                <div className="content">
                  <div className="columns">
                  <div className="column">
                      
                      <div className="columns">
                        <div className="column is-half">
                          <div className="card card-shadow">
                            <div className="card-image">
                                <img src={imgfice} alt="Placeholder image" />
                            </div>
                            <div className="card-content">
                              <div className="media">
                                <div className="media-content">
                                  <ServicesMenu className="title is-5 has-text-centered">Governments</ServicesMenu>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column is-half">
                          <div className="card">
                            <div className="card-image">
                                <img src={mine} alt="Placeholder image" />
                            </div>
                            <div className="card-content">
                              <div className="media">
                                <div className="media-content">
                                  <ServicesMenu className="title is-5 has-text-centered">Mining</ServicesMenu>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-half">
                          <div className="card">
                            <div className="card-image">
                                <img src={newD} alt="Placeholder image" />
                            </div>
                            <div className="card-content">
                              <div className="media">
                                <div className="media-content">
                                  <ServicesMenu className="title is-5 has-text-centered">Commercial</ServicesMenu>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="column">
                          <div className="card">
                            <div className="card-image">
                                <img src={buyer} alt="Placeholder image" />
                            </div>
                            <div className="card-content">
                              <div className="media">
                                <div className="media-content">
                                  <ServicesMenu className="title is-5 has-text-centered">Wholesale Buyers</ServicesMenu>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-half">
                      <div className="content">
                        <AdvParagraph className="subtitle is-6 has-text-left is-uppercase" id="headTitle">Who are our partners and clients</AdvParagraph>
                        <AdvTitle className="subtitle has-text-left is-2">Intended Markets </AdvTitle>
                        <ServicesPara className="has-text-left">
                          As we continue to evolve and widen our reach within the southern hemisphere and beyond.
                          <br /><br />
                          Our growing partners base are in these following geographic regions:
                          <br /><br />
                          <MarketRegion>Asia: China & Singapore</MarketRegion>
                          <MarketRegion>Middle-East: Dubai & Oman </MarketRegion>
                          <br />
                          Furthermore, our valued customers have increased exponentially. Our client base span across these following industry sectors. 
                        </ServicesPara>
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

const AdvParagraph = styled.p`
  font-size: 14px;
  color: #9aa8bd;
  letter-spacing: 1.2px;
`
const AdvTitle = styled.p`
  font-size: 2.6rem;
  color: #003468;
  font-family: 'Open Sans', sans-serif;
  margin-top: -10px;

  @media (max-width: 768px) { 
    color: #003468;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    text-align: center;
	}
`
const ServicesPara = styled.p`
  font-size: 1.2rem;
  margin-top: 0px;
  color: #003468;
  font-family: 'Open Sans', sans-serif;
`
const MarketRegion = styled.p`
  font-size: 1.2rem;
  margin-top: 0px;
  color: #003468;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`
const ServicesMenu = styled.p`
  font-size: 1.2rem;
  margin-top: 0px;
  color: #003468;
  font-weight: 600;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`

export default Markets;
