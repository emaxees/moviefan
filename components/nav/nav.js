import React from 'react';
import Link from 'next/link';
import { Button } from 'components';

const Nav = () => (
  <nav className="global-padding">
    <Link href="/">
      <h2>The movie box</h2>
    </Link>
    <ul>
      <li>
        <img src="/images/find.svg" alt="find" />
      </li>
      <li>
        <Link href="/login">
          <a>
            <Button theme="transparent">Login</Button>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>
            <Button theme="pink">Sign Up</Button>
          </a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        nav {
          position: absolute;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        nav h2 {
          text-transform: uppercase;
          color: white;
          word-spacing: -10px;
        }
        nav ul {
          display: flex;
          align-items: center;
        }
        nav ul li img {
          width: 20px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
