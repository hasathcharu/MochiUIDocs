import React from 'react';
import '../styles/global.scss';
import { useCookies } from 'react-cookie';
import Head from 'next/head';
import Header from '../components/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  const [cookies, setCookie] = useCookies();
  if (!cookies.theme) {
    setCookie('theme', 'dark', { maxAge: 864000, path: '/', sameSite: true });
  }
  function handleTheme() {
    setCookie('theme', cookies.theme === 'light' ? 'dark' : 'light', {
      maxAge: 864000,
      path: '/',
    });
  }
  React.useEffect(() => {
    if (!cookies.theme) {
      document.documentElement.className = 'dark';
    } else {
      document.documentElement.className = cookies.theme;
    }
  }, [cookies.theme]);
  return (
    <>
      <Head>
        <meta name='theme-color' content='#22cc9d' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta property='og:title' content='Haritha Hasathcharu' />
        <meta
          property='og:description'
          content="This is Haritha's Personal Website"
        />
        <meta property='og:image' content='https://hasathcharu.com/embed.png' />
        <meta property='og:url' content='https://hasathcharu.com' />
        <meta property='og:type' content='website' />
        <meta name='description' content="This is Haritha's Personal Website" />
      </Head>
      <Header
        handleTheme={handleTheme}
        theme={cookies.theme}
        user={pageProps.user}
      />
      <Component {...pageProps} />
      <section className='footer'>&copy; Haritha Hasathcharu</section>
    </>
  );
}

export default MyApp;
