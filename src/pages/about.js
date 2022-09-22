import React from "react"
import Layout from "../components/Layout"  
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
            I'm baby kale chips ethical blue bottle hammock, cold-pressed hell of cliche ascot put a bird on it yuccie DIY. IPhone sartorial small batch snackwave fanny pack cardigan church-key knausgaard +1 vegan synth PBR&B ugh.
            </p>
            <p>
            Poutine Brooklyn intelligentsia cardigan lo-fi, tumblr 3 wolf moon lomo photo booth put a bird on it. Ugh cred pickled man bun copper mug typewriter shoreditch snackwave live-edge.  
            </p>
            <Link to="/contact" className="btn">contact</Link>
          </article>
          <StaticImage src="../assets/images/about.jpeg" alt="Person Pouring Salt in Bowl"
          className="about-img"
          placeholder="blurred"
           />
        </section> 
      </main>
    </Layout>
  )
}

export default about