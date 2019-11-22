import React from 'react';
import App from 'next/app';
import Layout from 'layout';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout {...pageProps}>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default MyApp;
