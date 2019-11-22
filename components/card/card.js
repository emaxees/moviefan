import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
    name, image, year, genres, valoration,
}, ...rest) => (
    <div className="container" {...rest}>
        <div className="image-container">
            <span>{year}</span>
        </div>
        <div className="info">
            <div className="left">
                <div>{name}</div>
                <div>{genres}</div>
            </div>
            <div className="right">{valoration}</div>
        </div>
        <style jsx>
            {`
        .container {
          height: 450px;
          width: 350px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 1rem;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          cursor: pointer;

          &:hover {
            opacity: 0.9;
            transition: 0.2s linear opacity;
          }
        }

        .image-container {
          width: 100%;
          height: 85%;
          position: relative;
          background: url(images/cards/${image}) no-repeat;
          background-size: cover;
          background-position: left bottom;

          & span {
            position: absolute;
            bottom: 15px;
            left: 15px;
            color: var(--global-color-grey-soft);
          }
        }

        .info {
          display: flex;
          padding: 15px;
          justify-content: space-between;
        }
        .left {
          display: flex;
          flex-direction: column;
          color: var(--global-color-grey-soft);
          font-size: var(--global-font-size-xs);

          & div:first-child {
            color: var(--global-color-grey-dark);
            font-size: var(--global-font-size-sm);
            font-weight: bold;
            margin-bottom: 0.5rem;
          }
        }
        .right {
          width: 50px;
          height: 38px;
          color: var(--global-color-pink);
          border: 1px solid var(--global-color-pink);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
        }
      `}
        </style>
    </div>
);

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.string,
    valoration: PropTypes.string,
};
export default Card;
