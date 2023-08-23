import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
   const [blogs, setBlogs] = useState(props.allblogs);
    // useEffect( () => {
    //     fetch("http://localhost:3000/api/blogs").then(a => {
    //         return a.json();
    //     }).then(parse => {
    //         console.log(parse);
    //         setBlogs(parse);
    //     })
    // }, [])
    return (
        <div className="container">
        <div className="row">
           <div className="col-md-48">
           <div className="blogs">
            {blogs.map((blogItem)=>{
                return(
                    <div className="blogs-Items" key={blogItem.slug}>
                    <h3> <Link href={`/blogpost/${blogItem.slug}`}>{blogItem.title}</Link></h3>
                        <p>{blogItem.content.substr(0, 150)} ...</p>
                    </div>
                )
            })}
           
            </div>
           </div>
    </div>
</div>
    )
}

export async function getServerSideProps(context) {
    let data = await fetch("http://localhost:3000/api/blogs");
    let allblogs = await data.json();
    return {
      props: { allblogs }, 
    }
  }
export default Blog;