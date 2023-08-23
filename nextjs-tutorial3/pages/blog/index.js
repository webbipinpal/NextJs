import Link from "next/link";
import Header from "../../component/Header"


export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return{
        props: {
            data:data
        }
    }
}

const Blog = ({data}) => {
    return(
        <>
            <Header />
            <div className="wrapper">
                <h1>Blog folder</h1>
                <ul className="blog-list">
                { data?.slice(0, 5).map( (items)=>{
                    return(
                    <Link href={`/blog/${items.id}`}> <li className="li-list" key={items.id}><span>{items.id}</span> {items.title}</li></Link>
                    )
                })
                }
                </ul>
            </div>
        </>
    )
}

export default Blog