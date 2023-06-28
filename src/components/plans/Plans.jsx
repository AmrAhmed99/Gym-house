import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import WhiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container'>
      
      <div className='plans-container-header'>
        <span className='stroke-text'>Ready to start</span>
        <span>Your journey</span>
        <span className='stroke-text'>Now withus</span>
      </div>

        <div className='plans'>
            {plansData.map((plan) => (
                <div className='plan' key={plan.id}>
                    {plan.icon}
                    <span className='plan-name'>{plan.name}</span>
                    <span className='plan-price'>$ {plan.price}</span>

                    {plan.features.map((feature, i) => (
                        <div className='feature' key={i}>
                            <img src={WhiteTick} alt="Remarkable point" />
                            <span>{feature}</span>
                        </div>
                    ))}

                    <span className='plan-forMoreInfo'>See more benefits -&gt;</span>
                    <button className='btn'>Join Now</button>

                </div>
            ))}
        </div>

    </div>
  );
}

export default Plans;
