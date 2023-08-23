import Navbar from '../components/nav/Navbar'
import '../styles/globals.css'
import '../styles/grid.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar />
    <Component {...pageProps} />
  </>
  )
  
}

export default MyApp
