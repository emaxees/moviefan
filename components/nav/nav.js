import React from 'react';
import Link from 'next/link';
import { Button, Subtitle } from 'components';
import {
    Container, Row, Col, Visible,
} from 'react-grid-system';

const Nav = () => (
    <Container fluid style={{ position: 'absolute', width: '100%', top: '1rem' }}>
        <Row align="center" justify="between">
            <Col xs={10} lg={6}>
                <Link href="/">
                    <Subtitle style={{ color: 'white' }}>The movie box</Subtitle>
                </Link>
            </Col>
            <Visible lg xl>
                <Col lg={6} align="end">
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
);

export default Nav;
