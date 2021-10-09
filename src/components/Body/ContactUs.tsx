import React from 'react'
import { Link } from "react-router-dom"
// import 'react-bulma-components/dist/react-bulma-components.min.css'
import styled from 'styled-components'

const ContactUs: React.FC = () => {
  return (
    <>
      <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
            <div className="firstsection">
              <div className="columns">
                    <div className="column">
                        <div className="content" id="contentSide">
                            <P className="subtitle has-text-centered is-2">Make an inquiry</P>
                        </div>
                    </div>
                </div>
                <br />
                <div className="content">
                  <div className="columns">
                    <div className="column is-one-quarter">
                      {/* <div className="field">
                        <div className="control">
                          <Link to="/" className="button is-info is-outlined is-fullwidth" id="noticeList">List of Shipments</Link>
                        </div>
                      </div> */}
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <LinkOutlineButton to="/contact-us" className="button is-outlined is-medium is-fullwidth">Send us an email</LinkOutlineButton>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      <div className="field">
                        <div className="control">
                          <LinkButtonOne to="/contact-us" className="button is-medium is-fullwidth">Talk to sales</LinkButtonOne>
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-quarter">
                      {/* <div className="field">
                        <div className="control">
                        <Link to="/pages/detailpage" className="button is-info is-fullwidth" id="noticeList">Detail of Shipments</Link>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

const LinkOutlineButton = styled(Link)`
    color: #003468;
    background: white;
    border-color: #003468;

    &:hover {
      background: #003468;
      color: white;
    }
`
const P = styled.p`
    color: #003468;
`
const LinkButtonOne = styled(Link)`
    background: #003468;
    color: white;

    &:hover {
        color: #003468;
        background: white;
        border-color: #003468;
    }
`

export default ContactUs;
