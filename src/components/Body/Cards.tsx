import React from 'react'
import { Link } from "react-router-dom"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faGasPump, faHandsHelping, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import twitter from '../../assets/svg/home.svg'
import gear from '../../assets/svg/gear.svg'
import skype from '../../assets/svg/chat-bubble.svg'

const Cards: React.FC = () => {
  return (
    <>
     <section className="section is-paddingless-horizontal" id="icard">
        <div className="container grid is-large">
            <div className="firstsection">
                <div className="content">
                <div className="columns">
                <div className="column is-one-third">
                    <MainIcon className="has-text-centered"><span><Image className="content" src={gear} height="150" width="160" alt="office" /></span></MainIcon>
                    <MainTitle className="has-text-centered">Reliable</MainTitle>
                    <MainParagraph className="has-text-centered">
                        Achieve 15% higher on-time delivery that ensure your business operates as usual.
                    </MainParagraph>
                </div>
                <div className="column is-one-third">
                    <MainIcon className="has-text-centered"><span><img className="content" height="150" width="160" src={skype} alt="office" /></span></MainIcon>
                    <MainTitle className="has-text-centered">Easy</MainTitle>
                    <MainParagraph className="has-text-centered">
                        Minimize the complexity of your supply chain, and save 30% on administrative work.
                    </MainParagraph>
                </div>
                <div className="column is-one-third">
                  <MainIcon className="has-text-centered"><span><img className="content" height="150" width="160" src={twitter} id="imgCover" alt="office" /></span></MainIcon>
                  <MainTitle className="has-text-centered">Efficient</MainTitle>
                  <MainParagraph className="has-text-centered">
                    Streamline and optimize your transportation & logistics processes, and reduce your overall cost by 15%
                  </MainParagraph>
                </div>
              </div>

              </div>    
             </div>
        </div>
     </section>
    </>
  );
}
const Image = styled.img`
  @media (max-width: 768px) { 
    height: 120;
    width: 130;
    text-align: center;
  }
`
const MainIcon = styled.div`
  color: #003468;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 768px) { 
    color: #003468;
    font-size: 3.2rem;
    font-weight: 500;
    text-align: center;

	}
`
const MainTitle = styled.div`
  color: #003468;
  font-size: 3rem;
  font-weight: 400;
  ont-family: 'Open Sans',sans-serif;

  @media (max-width: 768px) { 
    color: #003468;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;

	}
`

const MainParagraph = styled.p`
  color: #003468;
  font-size: 1.1rem;
  text-align: left;

  @media (max-width: 768px) { 
    color: #003468;
    font-size: 1.1rem;
    text-align: center;
	}
`

export default Cards;
