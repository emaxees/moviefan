import React from 'react';
import { Title, Button } from 'components';

const clickHandler = (e) => {
    window.console.log(`Click on ${e.target.textContent}`);
};

const Hero = ({ ...rest }) => (
    <div className="hero global-padding" {...rest}>
        <div className="container">
            <Title>Wrath of the titans</Title>
            <Button theme="pink" onClick={clickHandler}>
        Watch Movie
            </Button>
            <Button theme="light" onClick={clickHandler}>
        View Info
            </Button>
            <Button theme="transparent" onClick={clickHandler}>
        + Add to Wishlist
            </Button>
        </div>
        <style jsx>
            {`
        .hero {
          width: 100%;
          height: 50rem;
          color: #333;
          background: url('images/hero-bg-image.jpg') no-repeat center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .container {
          margin-bottom: 4rem;
        }
      `}
        </style>
    </div>
);

export default Hero;
