import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import './static/styles/lib/bootstrap-dist/css/bootstrap.min.css'
import './static/styles/base/common.scss'
import './static/styles/base/test.less'

export default ({ children, title = '兜礼' }) => (
  <div className="App">
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Header />
    { children }
    <Footer />
    <style jsx>{`
      .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 80px;
      }

      .App-header {
        background-color: #222;
        height: 150px;
        padding: 20px;
        color: white;
      }

      .App-title {
        font-size: 1.5em;
      }

      .App-intro {
        font-size: large;
      }

      @keyframes App-logo-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

        `}
    </style>
  </div>
)
