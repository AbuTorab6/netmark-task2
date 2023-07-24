import React,{Fragment,useState} from 'react';

import '../assets/css/custom.css'

import { FaRegEnvelope } from "react-icons/fa";

import HeroLogo1 from '../assets/image/heroLogo1.png'
import HeroLogo2 from '../assets/image/heroLogo2.png'
import HeroLogo3 from '../assets/image/heroLogo3.png'
import HeroLogo4 from '../assets/image/heroLogo4.png'

import heroImg from '../assets/image/heroImg.png'
import heroStar from '../assets/image/heroStar.png'


import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "../../node_modules/video-react/dist/video-react.css"
import { Player,BigPlayButton,LoadingSpinner } from 'video-react';

const Hero = () => 
{
    
    var[play,setPlay]=useState(false)

    var showModal = ()=>
    {
        setPlay(true)
    }

    var hideModal = ()=>
    {
        setPlay(false)
    }

    return (
        <Fragment>
             <Modal show={play} onHide={hideModal}>
                    
                    <Modal.Body>
                            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                <BigPlayButton position="center" />
                                <LoadingSpinner />
                            </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className='modal-btn' variant="secondary" onClick={hideModal}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
            </Modal>
            <section className='hero-section'>
                <div className='row'>
                    <div className='hero-grid'>
                        <div className='col left'>
                            <h1 className='title'>Team projects, done well </h1>
                            <p>The only platform that gives your team all the tools needed to work together on their awesome projects.</p>
                            <div className='hero-grid-top'>
                                <div className='input-field'><span><FaRegEnvelope/></span><input type="text" placeholder='Enter work email' /></div>
                                <div><button>Sign Up Free  &#8594;</button></div>
                            </div>
                            <div className='hero-grid-bottom'>
                                <div><img className='img' src={HeroLogo1} /></div>
                                <div><img className='img' src={HeroLogo2} /></div>
                                <div><img className='img' src={HeroLogo3} /></div>
                                <div><img className='img' src={HeroLogo4} /></div>
                            </div>
                        </div>
                        <div className='col right'>
                            <div className='heroImage'>
                                <img  onClick={showModal} className='heroImg' src={heroImg} />
                                <img className='heroStar' src={heroStar} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Hero;