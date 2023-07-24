import React,{Fragment,useState} from 'react';

import workflowImg from '../assets/image/workflowImg.png'

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "../../node_modules/video-react/dist/video-react.css"
import { Player,BigPlayButton,LoadingSpinner } from 'video-react';


const Workflow = () => 
{
    var[play,setPlay]=useState(false)
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => 
    {
        setToggleState(index);
    }

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
            <section className='workflow-section'>
                <div className='row'>
                    <div className='workflow-grid'>
                        <div className='col left'>
                            <h2>Improve workflow</h2>
                            <div className='btn-grp'>
                                <button className={toggleState === 1 ? "workflow-btn workflow-active-btn" : "workflow-btn"} onClick={() => toggleTab(1)}>Research</button>
                                <button className={toggleState === 2 ? "workflow-btn workflow-active-btn" : "workflow-btn"} onClick={() => toggleTab(2)}>Plan</button>
                                <button className={toggleState === 3 ? "workflow-btn workflow-active-btn" : "workflow-btn"} onClick={() => toggleTab(3)}>Design</button>
                            </div>
                            <p  className={toggleState === 1 ? "workflow-content  workflow-active-content" : "workflow-content"}>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
                            <p  className={toggleState === 2 ? "workflow-content  workflow-active-content" : "workflow-content"}>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet.  </p>
                            <p  className={toggleState === 3 ? "workflow-content  workflow-active-content" : "workflow-content"}>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada .habitasse arcu varius lorem elit.habitasse arcu varius lorem elit. </p>
                            <span>Check the tools  &#8594;</span>
                        </div>
                        <div className='col right'>
                            <div className='workflowImage'>
                                <img  onClick={showModal} className='workflowImg' src={workflowImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Workflow;