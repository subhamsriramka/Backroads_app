import React from 'react'
import Title from './Title'
import aboutImg from '../images/about.jpeg'
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Welcome to Backroads App, where we invite you to explore the
            difference. Our mission is to provide you with unparalleled
            experiences on the road less traveled.
          </p>
          <p>
            Discover hidden gems, immerse yourself in breathtaking landscapes,
            and connect with local cultures. Embark on unforgettable journeys
            and let us guide you through extraordinary adventures. Explore the
            difference with Backroads App.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About