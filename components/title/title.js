import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, ...rest }) => (
  <h1 {...rest}>
    {children}
    <style jsx>
      {`
        h1 {
          color: var(--global-color-white);
          text-transform: uppercase;
          font-weight: bold;
        }
      `}
    </style>
  </h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
