import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Backroads Explorer</h1>
        <p>
          Discover the hidden treasures of the Backroads with our ultimate
          touring experience!
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
}

export default Hero