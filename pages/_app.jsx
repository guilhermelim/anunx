import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/utility/createEmotionCache'
import { ThemeProvider as PreferredThemeProvider } from 'next-themes'
import { GlobalStyles } from '@mui/material'

import PageProvider from '../src/utility/PageProvider'
import PageCheckMounted from '../src/utility/PageCheckMounted'
import { globalStyles } from '../src/theme'
import { ToastyProvider } from '../src/contexts/Toasty'

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
        <PageProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <ToastyProvider>
            <CssBaseline />
            <GlobalStyles styles={globalStyles} />
            <PageCheckMounted>
              <Component {...pageProps} />
            </PageCheckMounted>
          </ToastyProvider>
        </PageProvider>
      </CacheProvider>
    </PreferredThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
