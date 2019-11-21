import React from "react";
import PropTypes from "prop-types";

const Title = ({ children, ...rest }) => (
  <h2 {...rest}>
    {children}
    <style jsx>
      {`
        h2 {
          color: var(--global-font-color-grey);
          text-transform: uppercase;
          font-weight: bold;
        }
      `}
    </style>
  </h2>
);

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
