import React from 'react'
import styled from 'styled-components';
import {BsFacebook, BsLinkedin} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";

export default function Footter() {
  return (
    <Fotter>

      <span>Copyright &copy; 2024 TravelSrilanka All rights reserved</span>

      <ul className='links'> 

          <li>
            <a href="#hero"> Home</a>
          </li>
          <li><a href="#services">Services</a></li>
          <li><a href="#recommend">Places</a></li>
          <li><a href="#testimonials">Owners</a></li>
        </ul>

        <ul className="social_links">
          <li>
            <BsFacebook/>
          </li>
          <li>
            <AiFillInstagram/>
          </li>
          <li>
            <BsLinkedin/>
          </li>
        </ul>

    </Fotter>
  );
}






const Fotter = styled.footer`
display: flex;
justify-content: space-evenly;
background-color: #31BCFE;
border-radius: 0.5rem;

padding: 2.5rem;

ul {
  display: flex;
  list-style-type: none;
  gap: 2rem;
  li {
    a {
      text-decoration: none;
      color: black;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #302ce9;
      }
    }
    svg {
      font-size: 1.3rem;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #302ce9;
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1024px) {
  flex-direction: column;
  gap: 2rem;
  ul {
    flex-direction: column;
  }
  .social__links {
    flex-direction: row;
  }
}

`;