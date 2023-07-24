import React,{Fragment} from 'react';

import enjoyImg from '../assets/image/enjoyImg.png'
import heroStar from '../assets/image/enjoyStar.png'

const Enjoy = () => {
    return (
        <Fragment>
            <section className='enjoy-section'>
                <div className='row'>
                    <div className='enjoy-grid'>
                        <div className='col right small-screen'>
                            <h2>Enjoy your time working</h2>
                            <p>Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
                            <span>See how it helped others  &#8594;</span>
                        </div>
                        <div className='col left'>
                            <div className='enjoyImage'>
                                <img className='enjoyImg' src={enjoyImg} />
                                <img className='enjoyStar' src={heroStar} />
                            </div>
                        </div>
                        <div className='col right large-screen'>
                            <h2>Enjoy your time working</h2>
                            <p>Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
                            <span>See how it helped others  &#8594;</span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Enjoy;