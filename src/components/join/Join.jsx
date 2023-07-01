import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Join.css';

const Join = () => {
  const form = useRef();
  const emailInputRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uls72ch', 'template_9c1d108', form.current, '89cTOH57yQ2jKtoFg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    emailInputRef.current.value = '';

  };

  return (
    <div className='join' id='join-us'>
      <div className='left-join'>

        <h5 className='join-heading'>
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span>Level up</span>
            </div>
            <div>
                <span>Your body</span>
                <span className='stroke-text'>With us</span>
            </div>
        </h5>

      </div>
      <div className='right-join'>

        <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input ref={emailInputRef} type="email" name='user-email' placeholder='Enter your Email address' className='email-input' />
            <button className='btn btn-join'>Join Now</button>
        </form>
        
      </div>
    </div>
  );
}

export default Join;
