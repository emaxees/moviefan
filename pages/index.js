import React from 'react';
import Head from 'next/head';
import { Nav, Title } from 'components';


const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div className="hero">
            <h1 className="title">Welcome to Next.js!</h1>
            <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
            </p>

            <div className="row">
                <a href="https://nextjs.org/docs" className="card">
                    <h3>Documentation &rarr;</h3>
                    <p>Learn more about Next.js in the documentation.</p>
                </a>
                <a href="https://nextjs.org/learn" className="card">
                    <h3>Next.js Learn &rarr;</h3>
                    <p>Learn about Next.js by following an interactive tutorial!</p>
                </a>
                <a
                    href="https://github.com/zeit/next.js/tree/master/examples"
                    className="card"
                >
                    <h3>Examples &rarr;</h3>
                    <p>Find other example boilerplates on the Next.js GitHub.</p>
                </a>
            </div>
            <Title>Wrath of the titans</Title>
        </div>
        <style jsx global>
            {`
        @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

        :root {
          /* Font Sizes */
          --font-size--xs: 0.8rem;
          --font-size--sm: 1rem;
          --font-size--md: 1.8rem;
          --font-size--lg: 2.8rem;
          --font-size--xl: 4.6rem;

          --global-font-family: "Roboto", sans-serif;
        }
        body {
          background-color: #333;
          margin: 0;
          font-family: var(--global-font-family);
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
        h1 {
          font-size: var(--font-size--xl);
        }
      `}
        </style>
        <style jsx>
            {`
        .hero {
          width: 100%;
          color: #333;

          & h1 {
            color: red;
          }
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}
        </style>
    </div>
);

export default Home;
