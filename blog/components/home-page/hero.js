import classes from './hero.module.css'
import Image from 'next/image'

export default function Hero(){

    return(

        <section className={classes.hero}>

            <div> className={classes.image}

                <Image src='/images/site/image-h-and-shoulder.jpg' alt='showing m2c' width={300} height={300} priority/>
            </div>

            <h1>Hi, I'm M2c</h1>
            <p>I am a God</p>

        </section>

    )
    
}