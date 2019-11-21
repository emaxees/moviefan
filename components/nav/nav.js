import React from 'react';
import Link from 'next/link';
import { Button } from 'components';

const Nav = () => (
    <nav>
        <Link href="/">
            <h2>The movie box</h2>
        </Link>
        <ul>
            <li>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                >
                    <g fill="none">
                        <g fill="#FFF">
                            <path d="M13.7 27.5C16.9 27.5 19.9 26.4 22.3 24.4L23.6 25.6 23.1 26.1C22.9 26.3 22.8 26.6 22.8 26.9 22.8 27.2 22.9 27.5 23.1 27.7L32.7 37.2C32.9 37.4 33.2 37.5 33.5 37.5 33.8 37.5 34.1 37.4 34.3 37.2L36.8 34.7C37 34.4 37.2 34.1 37.2 33.8 37.2 33.5 37 33.2 36.8 33L27.3 23.5C26.9 23.1 26.1 23.1 25.7 23.5L25.2 24 23.9 22.8C26 20.4 27.1 17.3 27.1 14.1 27.1 10.5 25.8 7.1 23.2 4.6 20.7 2.1 17.3 0.7 13.7 0.7 10.1 0.7 6.8 2.1 4.2 4.6 1.7 7.1 0.3 10.5 0.3 14.1 0.3 17.7 1.7 21.1 4.2 23.6 6.8 26.1 10.1 27.5 13.7 27.5ZM34.4 33.8L33.5 34.8 25.6 26.9 26.5 26 34.4 33.8ZM5.9 6.2C8 4.1 10.8 3 13.7 3 16.7 3 19.5 4.1 21.6 6.2 23.7 8.3 24.8 11.1 24.8 14.1 24.8 17.1 23.7 19.9 21.6 22 19.5 24.1 16.7 25.2 13.7 25.2 10.8 25.2 8 24.1 5.9 22 3.8 19.9 2.6 17.1 2.6 14.1 2.6 11.1 3.8 8.3 5.9 6.2Z" />
                        </g>
                    </g>
                </svg>
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
          display: flex;
          justify-content: space-between;
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
        nav ul li svg {
          width: 20px;
        }
      `}
        </style>
    </nav>
);

export default Nav;
