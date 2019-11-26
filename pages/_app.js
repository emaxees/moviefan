import React from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import makeStore from 'core/store';
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
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(MyApp);
