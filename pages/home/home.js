import React from 'react';
import { Hero, Subtitle, Card } from 'components';

const cards = [
    {
        name: 'logan',
        image: '0.jpg',
        year: '2017',
        genres: 'action, adventure, fantasy',
        valoration: '5.0',
    },
    {
        name: 'logan',
        image: '0.jpg',
        year: '2017',
        genres: 'action, adventure, fantasy',
        valoration: '5.0',
    },
    {
        name: 'logan',
        image: '0.jpg',
        year: '2017',
        genres: 'action, adventure, fantasy',
        valoration: '5.0',
    },
    {
        name: 'logan',
        image: '0.jpg',
        year: '2017',
        genres: 'action, adventure, fantasy',
        valoration: '5.0',
    },
    {
        name: 'logan',
        image: '0.jpg',
        year: '2017',
        genres: 'action, adventure, fantasy',
        valoration: '5.0',
    },
    {
        name: 'logan',
        image: '0.jpg',
        year: '2017',
        genres: 'action, adventure, fantasy',
        valoration: '5.0',
    },
].map((card) => (
    <Card
        name={card.name}
        image={card.image}
        year={card.year}
        genres={card.genres}
        valoration={card.valoration}
        key={`key-${card.name}-${card.year}`}
    />
));

const Home = () => (
    <div>
        <Hero />
        <div className="container global-padding">{cards}</div>
        <Subtitle>THEMOVIEBOX</Subtitle>
        <style jsx>
            {`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}
        </style>
    </div>
);

export default Home;
