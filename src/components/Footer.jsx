import React,{Fragment} from 'react';

const Footer = () => {
    return (
        <Fragment>
            <section className='footer-section'>
                <div className='row'>
                    <div className='footer-grid'>
                        <div>
                            <p><b>magnifico</b> © {(new Date().getFullYear())}. All rights reserved.</p>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Resources</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;