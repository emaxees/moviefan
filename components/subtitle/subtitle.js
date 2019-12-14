import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ children, ...rest }) => (
    <h2 {...rest}>
        {children}
        <style jsx>
            {`
            h2 {
              text-transform: uppercase;
              font-weight: bold;
            }
          `}
        </style>
    </h2>
);

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Subtitle;
