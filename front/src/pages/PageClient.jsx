import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import VoirClient from './../components/VoirClient';

const PageClient = () => {
    return ( 
        <>
            <Header />
            <h1 className="container">Page client </h1>
            <VoirClient/>
            <Footer />
        </>
    );
}

export default PageClient;

