import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Nav } from 'components';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>The Movie Box</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container">
      <Nav />
      {children}
      <style jsx global>
        {`
          /* RESET */
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 62.5%;
            line-height: 23px;
            font: inherit;
            vertical-align: baseline;
          }

          :focus {
            outline: 0;
          }

          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }

          ol,
          ul {
            list-style: none;
          }

          blockquote,
          q {
            quotes: none;
          }

          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: '';
            content: none;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          input[type='search']::-webkit-search-cancel-button,
          input[type='search']::-webkit-search-decoration,
          input[type='search']::-webkit-search-results-button,
          input[type='search']::-webkit-search-results-decoration {
            -webkit-appearance: none;
            -moz-appearance: none;
          }

          input[type='search'] {
            -webkit-appearance: none;
            -moz-appearance: none;
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;
          }

          textarea {
            overflow: auto;
            vertical-align: top;
            resize: vertical;
          }

          audio,
          canvas,
          video {
            display: inline-block;

            max-width: 100%;
          }

          audio:not([controls]) {
            display: none;
            height: 0;
          }

          [hidden] {
            display: none;
          }

          html {
            font-size: 100%;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }

          a:focus {
            outline: thin dotted;
          }

          a:active,
          a:hover {
            outline: 0;
          }

          img {
            border: 0;
            -ms-interpolation-mode: bicubic;
          }

          figure {
            margin: 0;
          }

          form {
            margin: 0;
          }

          fieldset {
            border: 1px solid #c0c0c0;
            margin: 0 2px;
            padding: 0.35em 0.625em 0.75em;
          }

          legend {
            border: 0;
            padding: 0;
            white-space: normal;
          }

          button,
          input,
          select,
          textarea {
            font-size: 100%;
            margin: 0;
            vertical-align: baseline;
          }

          button,
          input {
            line-height: normal;
          }

          button,
          select {
            text-transform: none;
          }

          button,
          html input[type='button'],
          input[type='reset'],
          input[type='submit'] {
            -webkit-appearance: button;
            cursor: pointer;
          }

          button[disabled],
          html input[disabled] {
            cursor: default;
          }

          input[type='checkbox'],
          input[type='radio'] {
            box-sizing: border-box;
            padding: 0;
          }

          input[type='search'] {
            -webkit-appearance: textfield;
            -moz-box-sizing: content-box;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
          }

          input[type='search']::-webkit-search-cancel-button,
          input[type='search']::-webkit-search-decoration {
            -webkit-appearance: none;
          }

          button::-moz-focus-inner,
          input::-moz-focus-inner {
            border: 0;
            padding: 0;
          }

          textarea {
            overflow: auto;
            vertical-align: top;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          ::-moz-selection {
            background: #b3d4fc;
            text-shadow: none;
          }

          ::selection {
            background: #b3d4fc;
            text-shadow: none;
          }

          img {
            vertical-align: middle;
          }

          fieldset {
            border: 0;
            margin: 0;
            padding: 0;
          }

          textarea {
            resize: vertical;
          }

          .chromeframe {
            margin: 0.2em 0;
            background: #ccc;
            color: #000;
            padding: 0.2em 0;
          }

          /* CUSTOM GLOBAL VARS */

          @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

          .container {
            margin: 0 5rem;
          }

          :root {
            --global-font-size-xs: 0.8rem;
            --global-font-size-sm: 1rem;
            --global-font-size-md: 1.8rem;
            --global-font-size-lg: 2.8rem;
            --global-font-size-xl: 4.6rem;

            --global-color-pink: #ff0079;
            --global-color-grey: #494c62;
            --global-color-white: #ffffff;
            --global-font-family: 'Roboto', sans-serif;
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
            font-size: var(--global-font-size-xl);
          }
          h2 {
            font-size: var(--global-font-size-lg);
          }
        `}
      </style>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
