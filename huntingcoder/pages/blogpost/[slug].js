import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css'

const slug = (props) => {
    const [blog, setBlog] = useState(props.myblogs);

    // const router = useRouter();
    // useEffect( () => {
    //     if(!router.isReady) return;
    //     const {slug} = router.query;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then(a => {
    //         return a.json();
    //     }).then(parse => {
    //         setBlog(parse);
    //     })

    // }, [router.isReady]);

    return(
        <div className="container">
        <div className="row">
        <div className="col-md-22">
               <img src={blog && blog.image} className="full-width" alt={blog && blog.title} title={blog && blog.title} />
            </div>
           <div className="col-md-24 col-md-offset-2">
                <h3>{blog && blog.title}</h3>
                <p>{blog && blog.content}</p>
                <a href={blog && blog.readmore} target="_blank" className="l-btn l-btn--darkblue">Read More</a>
            </div>
        </div>
        </div>
    )
}

export async function getServerSideProps(context) {

        const {slug} = context.query;
        let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
        let myblogs = await data.json();

    return {
      props: { myblogs }, 
    }
  }
export default slug;