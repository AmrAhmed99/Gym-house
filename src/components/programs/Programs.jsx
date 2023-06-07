import React from 'react';
import './Programs.css';
import RightArrow from '../../assets/rightArrow.png';
import { programsData } from '../../data/programsData';

const Programs = () => {
    return (
        <div className="programs" id='programs'>

            <div className='programs-header'>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className='programs-categories'>
                {programsData.map((program) => (
                    <div className='program-category'>
                        {program.image}
                        <span className='program-category-heading'>{program.heading}</span>
                        <span className='program-category-details'>{program.details}</span>
                        <div className='program-category-btn'>
                            <span>Join Now</span>
                            <img src={RightArrow} alt="right arrow" className='program-category-btn-img' />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
};

export default Programs;