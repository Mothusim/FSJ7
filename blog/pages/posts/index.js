import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from '../../lib/posts-util'

export default function AllPostsPage(props){

    return(

        <Fragment>

            <title>All posts</title>
            <meta name='description' content="A list of all programming-related tutorials and posts" />
        
            <AllPosts posts={props.posts} />
            
        </Fragment>

    )

}

export function getStaticProps(){

    const allPosts = getAllPosts()

    return {

        props: {

            posts: allPosts

        },

    }

}