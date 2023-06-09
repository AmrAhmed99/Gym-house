import React from 'react';
import './Reasons.css';

import ImgOne from '../../assets/image1.png';
import ImgTwo from '../../assets/image2.png';
import ImgThree from '../../assets/image3.png';
import ImgFour from '../../assets/image4.png';
import Nb from '../../assets/nb.png';
import Adidas from '../../assets/adidas.png';
import Nike from '../../assets/nike.png';
import Tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
      <div className='left-reasons'>
        <img src={ImgOne} alt="A fitness man" className='left-reasons-imgOne' />
        <img src={ImgTwo} alt="A fitness man" className='left-reasons-imgTwo' />
        <img src={ImgThree} alt="A fitness man" className='left-reasons-imgThree'  />
        <img src={ImgFour} alt="A fitness man" className='left-reasons-imgFour'  />
      </div>
      <div className='right-reasons'>
        <span className='right-reasons-headingOne'>some reasons</span>
        <div className='right-reasons-headingTwo'>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <ul className='right-reasons-answers'>
          <li className='right-reasons-answer'>
            <img src={Tick} alt="Remarkable point" />
            <p>OVER 140+ EXPERT COACHS</p>
          </li>
          <li className='right-reasons-answer'>
            <img src={Tick} alt="Remarkable point" />
            <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
          </li>
          <li className='right-reasons-answer'>
            <img src={Tick} alt="Remarkable point" />
            <p>1 FREE PROGRAM FOR NEW MEMBER</p>
          </li>
          <li className='right-reasons-answer'>
            <img src={Tick} alt="Remarkable point" />
            <p>RELIABLE PARTNERS</p>
          </li>
        </ul>

        <span className='partners-heading'>OUR PARTNERS</span>

        <div className='partners-images'>
          <img src={Nb} alt="nb brand" />
          <img src={Adidas} alt="adidas brand" />
          <img src={Nike} alt="nike brand" />
        </div>

      </div>
    </div>
  );
}

export default Reasons;
