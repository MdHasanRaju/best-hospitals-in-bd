import React from 'react';
import Banner from '../Banner/Banner';
import DefaultServices from '../DefaultServices/DefaultServices';
import Faq from '../Faq/Faq';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import SingleService from '../SingleService/SingleService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DefaultServices></DefaultServices>
            <Feature></Feature>
            <Faq></Faq>
        </div>
    );
};

export default Home;