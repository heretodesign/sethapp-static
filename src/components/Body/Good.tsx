import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faGasPump, faPhone, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Good: React.FC = () => {
    return (
        <>
        <section className="section is-paddingless-horizontal" id="foundersSection">
            <div className="container grid is-large" id="founderWords">
            <div className="firstsection">
                <div className="content">
                    <div className="columns">
                        <div className="column">
                            <div className="content" id="contentSide">
                                <p className="subtitle has-text-centered is-2" style={colorStyle}>You're in good hands</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="content">
                    <div className="columns">
                        <div className="column is-one-third" style={cardStyle}>
                            <p className="has-text-left" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faGasPump} /></span>{' '} <strong style={paragraphStyle}>End to End Delivery</strong>
                            </p>
                            <p className="has-text-left" style={paragraphStyle}>
                                Pioneering delivery success after purchase to fulfill the demand our client. From remote regions to cities and beyond borders.
                            </p>
                        </div>
                        <div className="column is-one-third" style={cardStyle}>
                            <p className="has-text-left" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faPhone} /></span>{' '}<strong style={paragraphStyle}>World Class Support</strong>
                            </p>
                            <p className="has-text-left" style={paragraphStyle}>
                                24/7 support for you and your company, with dedicated support teams on standby to attend to your inquiry.
                            </p>
                        </div>
                        <div className="column is-one-third" style={cardStyle}>
                            <p className="has-text-left" style={paragraphStyle}>
                                <span><FontAwesomeIcon icon={faAddressCard} /></span>{' '}<strong style={paragraphStyle}>Exceptional Logistics</strong>
                            </p>
                            <p className="has-text-left" style={paragraphStyle}>
                                Excellent structured & detailed processes, as well as engagement teams to ease the logistic process.
                            </p>
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

const headerStyle = {
    fontSize: '2.6rem',
    marginTop: '80px',
    color: '#003468'
}

const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#003468'
}

const colorStyle = {
    color: '#003468'
}

const cardStyle = {
    borderStyle: 'outset',
    borderBottomColor: '#041B61'
}


export default Good;
