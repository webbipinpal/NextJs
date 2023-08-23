
import Header from '../../component/Header';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map((item) => {
        return{
            params : {
                slug : item.id.toString()
            },
        }
    })
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.slug;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return{
        props: {
            data:data,
        }
    }
}
const Slug = ({data}) => {

    return(
        <>
            <Header />
            <div className="wrapper">
                <h1>Blog folder</h1>
                <ul className="blog-list"> 
                <li className="li-list">
                    <span>{data.id}</span> <br /> 
                    <h4>{data.title}</h4>
                     <br /> 
                     <p>{data.body}</p>
                </li>
                </ul>
            </div>
        </>
    )
}

export default Slug;