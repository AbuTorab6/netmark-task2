import React,{Fragment} from 'react';


import {BrowserRouter,Routes,Route} from 'react-router-dom'

import HomePage from '../pages/HomePage';

const MyRouter = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                </Routes>
             </BrowserRouter>
        </Fragment>
    );
};

export default MyRouter;