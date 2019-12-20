import React from 'react';
import { Subtitle } from 'components';
import Link from 'next/link';
import { Container, Row, Col } from 'react-grid-system';

const containerStyles = {
    padding: '2rem 4rem',
    color: '#494c62',
    backgroundColor: '#fff00'
};

const Footer = () => (
    <Container fluid style={containerStyles}>
        <Row>
            <Col lg={9}>
                <Subtitle>THE MOVIE BOX</Subtitle>
            </Col>
            <Col lg={3}>
                <Row justify="end" style={{ marginBottom: '1rem' }}>
                    <Col xl={2}>About</Col>
                    <Col xl={2}>Movies</Col>
                    <Col xl={2}>Rating</Col>
                    <Col xl={2}>Contact</Col>
                </Row>
                <Row justify="end">
                    <div className="social">
                        <Link href="/">
                            <a className="facebook"/>
                        </Link>
                        <Link href="/">
                            <a className="pinterest"/>
                        </Link>
                        <Link href="/">
                            <a className="twitter"/>
                        </Link>
                        <Link href="/">
                            <a className="linkedin"/>
                        </Link>
                    </div>
                </Row>
            </Col>
        </Row>
        <style jsx>
            {`
        .social {
          & > * {
            width: 46px;
            height: 42px;
            margin: 3px;
            background: url('images/social-links.svg') no-repeat;
            text-indent: -9999px;
            white-space: nowrap;
            color: var(--global-color-grey-light);
            cursor: pointer;
            display: inline-block;

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
