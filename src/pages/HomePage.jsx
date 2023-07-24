import React,{Fragment} from 'react';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Enjoy from '../components/Enjoy';
import Tool from '../components/Tool';
import Solve from '../components/Solve';
import Workflow from '../components/Workflow';
import Join from '../components/Join';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navigation/>
            <Hero/>
            <Enjoy/>
            <Tool/>
            <Solve/>
            <Workflow/>
            <Join/>
            <Footer/>
        </Fragment>
    );
};

export default HomePage;