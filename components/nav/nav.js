import React from 'react';
import Link from 'next/link';
import { Button, Subtitle } from 'components';
import {
    Container, Row, Col, Visible,
} from 'react-grid-system';

const Nav = () => (
    <div className="root">
        <Container fluid>
            <Row align="center">
                <Col lg={10} xl={8}>
                    <Link href="/">
                        <Subtitle className="title">The movie box</Subtitle>
                    </Link>
                </Col>
                <Visible xl>
                    <Col xl={4}>
                        <img src="/images/find.svg" alt="find" />
                        <Link href="/login">
                            <a>
                                <Button theme="transparent">Login</Button>
                            </a>
                        </Link>
                        <Link href="/signup">
                            <a>
                                <Button theme="pink">Sign Up</Button>
                            </a>
                        </Link>
                    </Col>
                </Visible>
            </Row>
        </Container>
        <style jsx>{`
            .root {
                position: absolute;
                width: 100%;

            }
            .title {
                color: red;
            }
        `}
        </style>
    </div>
);

export default Nav;
