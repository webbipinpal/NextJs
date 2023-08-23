import Head from 'next/head';
import Header from '../component/Header';

const App = () => {
  return <>
  <Head>
  <title>Index Page</title>
  <meta charset="UTF-8" />
  <meta name="description" content="Free Web tutorials" />
  <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
  <meta name="author" content="John Doe" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    <Header />
    <div style={{paddingLeft:'20px'}}>
      <h1>Responsive Header</h1>
      <p>Resize the browser window to see the effect.</p>
      <p>Some content..</p>
    </div>

  </>
}

export default App;