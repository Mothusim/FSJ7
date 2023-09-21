import classes from './all-posts.module.css'
import Postsgrid from './posts-grid'

export default function AllPosts(props){

    return(

        <section className={classes.posts}>

            <h1>All Posts</h1>
            <Postsgrid posts={props.posts} />

        </section>

    )

}