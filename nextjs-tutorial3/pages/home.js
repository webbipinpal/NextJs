import Header from "../component/Header";
import Image from 'next/image';

const Home = () => {
    return(

        <>
            <Header />
            <div className="wrapper">

            <h1>Home page</h1>
            <Image src='/color.png' width={300} height={200} alt="Hi" />
            <Image src='https://images.unsplash.com/photo-1674644674031-b49db824edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80' width={300} height={200} alt="Hi" />
            </div>

        </>
    )
}

export default Home;