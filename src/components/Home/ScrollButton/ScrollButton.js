import React, { useState } from 'react';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ScrollButton.css'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
    if (!visible && window.pageYOffset  > 300){
      setVisible(true)
    } 
    else if(visible && window.pageYOffset  <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
    return (
        <div className="scroll__container">
            <FontAwesomeIcon icon={faArrowCircleUp}  onClick={scrollToTop} 
            className="scrollTop"
            size="2x"
            style={{height: 40, display: visible ? 'flex' : 'none'}}/>
        </div>
    );
}

export default ScrollButton;