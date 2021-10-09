import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import Founder from '../components/Body/Founder'
import Founders from '../components/Body/Founders'
import ContactUs from '../components/Body/ContactUs'
import Cards from '../components/Body/Cards'
import Good from '../components/Body/Good'
import OurServices from '../components/Body/OurServices'
import Market from '../components/Body/Market'
import Markets from '../components/Body/Markets'
import AboutUs from '../components/Body/AboutUs'
import Header from '../components/Header/Header'
import Vision from '../components/Body/Vision';
import Advantages from '../components/Body/Advantages';
import Banner from '../components/Body/Banner';
import Community from '../components/Body/Community';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Cards />
            {/* <Banner /> */}
            <OurServices />
            <Vision />
            <Advantages />
            <AboutUs />
            <br />
            <Market />
            <br />
            <Markets />
            <Community />
            <Founder />
            <br />
            <br />
            <br />
            <Good /> 
            <ContactUs />
        </>
    )
}

export default HomePage;