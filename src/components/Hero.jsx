import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import homeImg from '../assests/homeImg.jpg';

export default function Hero() {
  const [textToShow, setTextToShow] = useState('');

  useEffect(() => {
    const text = "VISIT SRI LANKA BEAUTIFULL PLACESS";
    let currentIndex = 0;

    const interval = setInterval(() => {
      setTextToShow(prevText => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(interval);
        setTextToShow(text); // Set the state to the entire text string
      }
    }, 50); // Adjust the speed of typing here (milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="hero">

      <div className="background">
        <img src={homeImg} alt="home-img" />
      </div>

      <div className="content">
        <div className="title">
          <h1>Travel Sri Lanka</h1>
          <p>Explore Sri Lanka's Rich Heritage, Stunning Landscapes, Vibrant Culture, and Exotic Cuisine with Unforgettable Adventures Await You. Discover Paradise Today!</p>
        </div>

      
       <h1><span>{textToShow}</span></h1>
       
      
        
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
 
  .background {
    height: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 600px;
      filter: brightness(70%);
      object-fit: cover;
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    gap: 1rem;

    .title {
      color: white;

      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }

    /* Styles for the modified section */
    h1 {
      font-size: 3rem;
      color: white;
      margin-top: 2rem;

      span {
        letter-spacing: 0.3rem; /* Adjust as needed */
      }
    }
  }
`;
