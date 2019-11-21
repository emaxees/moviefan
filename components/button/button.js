import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, theme }) => (
    <button onClick={onClick} className={theme}>
        {children}
        <style jsx>
            {`
        button {
          color: white;
          background-color: transparent;
          border-radius: 3px;
          min-width: 100px;
          height: 50px;
          margin: 1rem;
          cursor: pointer;
          text-transform: uppercase;
          font-size: var(--font-size--sm);
          padding: 10px 40px;

          & :focus {
            outline: 0;
          }
        }
        .pink {
          background-color: var(--global-color-pink);
          border: none;
        }
        .light {
          border: 1px solid white;
        }

        .transparent {
          border: none;
        }
      `}
        </style>
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    theme: PropTypes.oneOf(['light', 'transparent', 'pink']),
};

Button.defaultProps = {
    theme: 'light',
};

export default Button;
