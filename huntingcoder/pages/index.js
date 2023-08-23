import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  
  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyword" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
      <style jsx>{`
        h2{
          font-size:32px;
        }
        h3{
          font-size:28px;
        }
      `}</style>
            <div className="row">
               <div className="col-md-48 ">
                <div className="text-center">
                    <h1>Hunting Coder</h1>
                    <img className={styles.cimg} src="/codeimg.jpg"  width={280} height={180}/>
                    <p className={styles.description}>
                    A  blog for hunting coder by a hunding coder
                    </p>
                </div>
               
               <div className="blogs">
                <div className="blogs-Items">
                <h3>  How to learn javasript in 2022?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum reprehenderit ipsa id molestiae ipsam, qui culpa eos pariatur? Ea molestias odio error repudiandae cumque facere optio! Enim, neque libero.</p>
                </div>
                <div className="blogs-Items">
                    <h3>How to learn javasript in 2022?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum reprehenderit ipsa id molestiae ipsam, qui culpa eos pariatur? Ea molestias odio error repudiandae cumque facere optio! Enim, neque libero.</p>
                </div>
                <div className="blogs-Items">
                    <h3>How to learn javasript in 2022?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum reprehenderit ipsa id molestiae ipsam, qui culpa eos pariatur? Ea molestias odio error repudiandae cumque facere optio! Enim, neque libero.</p>
                </div>
                </div>
               </div>
        </div>
        </div>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}