import React from 'react';
import Banner from '../Banner/Banner';
import DefaultServices from '../DefaultServices/DefaultServices';
import Services from '../Services/Services';
import SingleService from '../SingleService/SingleService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DefaultServices></DefaultServices>
        </div>
    );
};

export default Home;