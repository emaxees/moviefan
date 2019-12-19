import React from 'react';
import { Subtitle } from 'components';
import Link from 'next/link';
import {
  Container, Row, Col, Visible,
} from 'react-grid-system';


const containerStyles = {
    padding: '2rem 4rem',
    color: '#494c62',
  };

const Footer = () => (
    <Container fluid style={containerStyles}>
        <Row>
            <Col lg={6}>
                <Subtitle>THE MOVIE BOX</Subtitle>
            </Col>
            <Col lg={6}>
                <Row justify="end">
                    <span>About</span>
                    <span>Movies</span>
                    <span>Rating</span>
                    <span>Contact</span>
                </Row>
                <Row align="end" justify="end">
                    <div className="social">
                        <Link href="/"><a className="facebook">facebook</a></Link>
                        <Link href="/" className="pinterest"><a>pinterest</a></Link>
                        <Link href="/" className="twitter"><a>twitter</a></Link>
                        <Link href="/" className="linkedin"><a>linkedin</a></Link>
                    </div>
                </Row>
            </Col>
        </Row>

        <style jsx>
            {`
        .social {
          background-color: yellow;
          & > * {
            width: 26px;
            height: 30px;
            margin: 3px;
            background: url('images/social-links.svg') no-repeat;
            text-indent: -9999px;
            white-space: nowrap;
            color: var(--global-color-grey-light);
            cursor: pointer;

            &:hover {
              opacity: 0.5;
              transition: 0.5s linear opacity;
            }

            &.facebook {
              background-position: 0px -1px;
            }
            &.pinterest {
              background-position: -57px -1px;
            }
            &.twitter {
              background-position: -114px -1px;
            }
            &.linkedin {
              background-position: -171px -1px;
            }
          }
        }
      `}
        </style>
    </Container>
);

export default Footer;
