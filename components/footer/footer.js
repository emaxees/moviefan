import React from 'react';
import { Subtitle } from 'components';

const Footer = () => (
  <div className="container">
    <div className="first-row">
      <Subtitle>THE MOVIE BOX</Subtitle>
      <ul>
        <li>About</li>
        <li>Movies</li>
        <li>Rating</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="second-row">
      <ul>
        <li className="facebook">facebook</li>
        <li className="pinterest">pinterest</li>
        <li className="twitter">twitter</li>
        <li className="linkedin">linkedin</li>
      </ul>
    </div>
    <style jsx>
      {`
        .container {
          background-color: var(--global-color-white);
          display: flex;
          flex-direction: column;
          padding: 2rem 4rem;
          color: var(--global-color-grey);
        }

        .first-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .second-row {
          & ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
          }
          & li {
            width: 26px;
            height: 30px;
            margin: 3px;
            background: url('images/social-links.svg') no-repeat;
            text-indent: -9999px;
            white-space: nowrap;
            color: var(--global-color-grey-light);
            cursor: pointer;

            & :hover {
              opacity: 0.5;
              transition: 0.5s linear opacity;
            }
          }
          & .facebook {
            background-position: 0px -1px;
          }
          & .pinterest {
            background-position: -57px -1px;
          }
          & .twitter {
            background-position: -114px -1px;
          }
          & .linkedin {
            background-position: -171px -1px;
          }
        }
      `}
    </style>
  </div>
);

export default Footer;
