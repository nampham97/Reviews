import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {id, image, job, name, text} = people[index];

  const checkNumber = num =>{
    if(num > people.length -1)
      return 0;
    if(num < 0)
      return people.length -1;
    return num;
  }

  const handlePrev = () =>{
    let newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  }
  const handleNext = () =>{
    let newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  }
  const handleRandom = () =>{
    let random = Math.floor(Math.random() * people.length) + 1;
    random === index && random++;
    setIndex(checkNumber(random));
  }

  return <article>
    <div className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className='quote-icon'><FaQuoteRight /></span>
      </div>
      <div>
        <h4 className="author">{name}</h4>
        <p className="aujobthor">{job}</p>
        <p className='info'>
          {text}
        </p>
      </div>
      <div>
        <button className='prev-btn' onClick={handlePrev}>
            <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext}>
            <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
            Supprise <GiPerspectiveDiceSixFacesRandom />
        </button>
    </div>
  </article>
};

export default Review;
