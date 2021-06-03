import 'styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <link hrefLang='en-US' lang='en-US' />

        <title>Fetch Rewards Exercise - Travis White</title>

        <meta name='author' content='Travis White' />
        <meta name='description' content='Coding exercise for Fetch Rewards - Front End Engineer Role' />
        <meta
          name='keywords'
          content='Travis White, traviswhite, fetch rewards, exercise, web development, front-end, react, next.js'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
        <link rel='manifest' href='favicon/site.webmanifest' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
