/* eslint-disable react/require-default-props */
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as PreferredThemeProvider } from 'next-themes';
import { GlobalStyles } from '@mui/material';
import { Provider } from 'next-auth/client';
import createEmotionCache from '../src/utility/createEmotionCache';

import PageProvider from '../src/utility/PageProvider';
import PageCheckMounted from '../src/utility/PageCheckMounted';
import { globalStyles } from '../src/theme';
import { ToastyProvider } from '../src/contexts/Toasty';
import CheckAuth from '../src/components/CheckAuth';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <PreferredThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Anunx</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Provider session={pageProps.session}>
          <PageProvider>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <ToastyProvider>
              <CssBaseline />
              <GlobalStyles styles={globalStyles} />
              <PageCheckMounted>
                {Component.requireAuth ? (
                  <CheckAuth Component={Component} pageProps={pageProps} />
                ) : (
                  <Component {...pageProps} />
                )}
              </PageCheckMounted>
            </ToastyProvider>
          </PageProvider>
        </Provider>
      </CacheProvider>
    </PreferredThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  emotionCache: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
