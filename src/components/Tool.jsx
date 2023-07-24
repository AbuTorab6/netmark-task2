import React,{Fragment} from 'react';

import toolImg from '../assets/image/toolImg.png'

const Tool = () => {
    return (
        <Fragment>
            <section className='tool-section'>
                <div className='row'>
                    <div className='tool-grid'>
                        <div className='col left '>
                            <h2>Get all the tools your team needs</h2>
                            <p>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
                            <span>Check the tools  &#8594;</span>
                        </div>
                        <div className='col right'>
                            <div className='toolImage'>
                                <img className='toolImg' src={toolImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Tool;