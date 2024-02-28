import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import homeImg from '../assests/homeImg.jpg';
import homeImg1 from '../assests/homeImg1.jpg';
import homeImg2 from '../assests/homeImg2.jpg';

const imageTexts = [
  { image: homeImg, text: "VISIT SRI LANKA BEAUTIFUL PLACES" },
  { image: homeImg1, text: "DISCOVER PARADISE TODAY" },
  { image: homeImg2, text: "EXPERIENCE THE MAGIC OF SRI LANKA" }
];

export default function Hero() {
     const [currentImgIndex, setCurrentImgIndex] = useState(0);
     const [textToShow, setTextToShow] = useState('');
     const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const textLength = imageTexts[currentImgIndex].text.length;
    const typingInterval = setInterval(() => {
      setTypingIndex(prevIndex => {
        if (prevIndex < textLength) {
          return prevIndex + 1;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentImgIndex(prevIndex => (prevIndex + 1) % imageTexts.length);
            setTextToShow('');
            setTypingIndex(0);
          }, 2000); 
          return prevIndex;
        }
      });
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentImgIndex]);

  useEffect(() => {
    setTextToShow(imageTexts[currentImgIndex].text.substring(0, typingIndex));
  }, [typingIndex, currentImgIndex]);

  return (
    <Section id="hero">
      <div className="background">
        <img src={imageTexts[currentImgIndex].image} alt="home-img" />
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

    h1 {
      font-size: 3rem;
      color: white;
      margin-top: 2rem;

      span {
        letter-spacing: 0.3rem; 
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;
