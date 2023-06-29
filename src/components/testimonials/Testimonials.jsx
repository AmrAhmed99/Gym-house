import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';


import './Testimonials.css';

const Testimonials = () => {
    const [selectedReviewer, setSelectedReviewer] = useState(0);

    const testimonialsLength = testimonialsData.length;

    const prevTestimonial = () => {
        if(selectedReviewer === 0) {
            setSelectedReviewer(testimonialsLength - 1);
        } else {
            setSelectedReviewer(prev => prev - 1)
        }
    };

    const nextTestimonial = () => {
        if(selectedReviewer === testimonialsLength - 1) {
            setSelectedReviewer(0)
        } else {
            setSelectedReviewer(prev => prev + 1)
        }
    };

    return (
        <div className='testimonials'>

            <div className='left-testimonials'>
                <h5 className='testimonial-heading'>
                    <span>
                        Testimonials
                    </span>
                    <span className='stroke-text'>
                        What they
                    </span>
                    <span>
                        say about us
                    </span>
                </h5>

                <p className='testimonial-review'>{testimonialsData[selectedReviewer].review}</p>
                <p><span>{testimonialsData[selectedReviewer].name}</span> - {testimonialsData[selectedReviewer].status}</p>
            </div>
            
            <div className='right-testimonials'>
                <div id='stylingPurpose-border'></div>
                <div id='stylingPurpose-card'></div>
                <img src={testimonialsData[selectedReviewer].image} alt="the reviewer" className='reviewer'/>
                <div className='arrows'>
                    <img src={leftArrow} alt="left arrow" onClick={prevTestimonial} />
                    <img src={rightArrow} alt="right arrow" onClick={nextTestimonial} />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;