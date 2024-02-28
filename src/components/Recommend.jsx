import React, { useState } from 'react'
import styled from 'styled-components';

import destination1 from "../assests/destination1.jpg";
import destination2 from "../assests/destination2.jpg";
import destination3 from "../assests/destination3.jpg";
import destination4 from "../assests/destination4.jpg";
import destination5 from "../assests/destination5.jpg";
import destination6 from "../assests/destination6.jpg";
import info1 from "../assests/info1.png";
import info2 from "../assests/info2.png";
import info3 from "../assests/info3.png";



export default function Recommend() {

  const data = [
    {
      image: destination1,

      title: "Mirissa",
     subTitle: "Mirissa is a coastal town in Sri Lanka known for its picturesque beaches and vibrant marine life. It offers opportunities for surfing, snorkeling, and whale watching.",
      cost: "50,000",
      duration: "Approx 3 night trip",
      
    },
    {
      image: destination2,
      title: "Colombo",
      subTitle: "Colombo is the commercial capital and largest city of Sri Lanka.",
      cost: "35,000",
      duration: "Approx 2 night trip",
    },
    {
      image: destination3,
      title: "Galle",
      subTitle: "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
      cost: "55,000",
      duration: "Approx 3 night trip",
    },
    {
      image: destination4,
      title: "Kadatholu Viharaya",
      subTitle: "Kadatholu Viharaya is a historic Buddhist temple located in Sri Lanka. It is renowned for its ancient architecture and religious significance.",
      cost: "45,000",
      duration: "Approx 2 night trip",
    },
    {
      image: destination5,
      title: "Udawalawe",
      subTitle: "Udawalawe is a popular national park in Sri Lanka known for its large population of elephants and diverse wildlife. It offers thrilling safari experiences amidst stunning natural landscapes.",
      cost: "55,000",
      duration: "Approx 2 night trip",
    },
    {
      image: destination6,
      title: "Sigiriya",
      subTitle: "Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
      cost: "60,000",
      duration: "Approx 2 night trip",
    },
  ];
  
  const packages = [
    "The Historical Journey",
    "The Nature Retreat",
    "The Cultural Immersion",
    "The Adventure Expedition",
  ];
  
  const [active, setActive] = useState(1);

  return (
    <Section id='recommend'>

      <div className="title">
         <h2> Our Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg,index) =>{
            return(
              <li className={active === index + 1 ? "active" :""}
                 onClick={()=> setActive(index +1)}>

                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
             <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
             <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
padding :2rem 0;
.title{
  text-align:center;
}
.packages {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  ul {
    display: flex;
    list-style-type: none;
    width: max-content;
    li {
      padding: 1rem 2rem;
      border-bottom: 0.1rem solid black;
    }
    .active {
      border-bottom: 0.5rem solid #8338ec;
    }
  }
}
.destinations {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 0 3rem;
  .destination {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #8338ec14;
    border-radius: 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    img {
      width: 100%;
    
      object-fit: cover;
      border-radius: 1rem;
      max-height:200px;

    }
    .info {
      display: flex;
      align-items: center;
      .services {
        display: flex;
        gap: 0.3rem;
        img {
          border-radius: 1rem;
          background-color: #4d2ddb84;
          width: 2rem;
          /* padding: 1rem; */
          padding: 0.3rem 0.4rem;
        }
      }
      display: flex;
      justify-content: space-between;
    }
    .distance {
      display: flex;
      justify-content: space-between;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 768px) {
  .packages {
    ul {
      li {
        padding: 0 0.5rem;
        font-size: 2vh;
        padding-bottom: 1rem;
      }
      .active {
        border-bottom-width: 0.3rem;
      }
    }
  }
  .destinations {
    grid-template-columns: 1fr;
    padding: 0;
  }
}


`;