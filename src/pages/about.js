import React from "react"
import Layout from "../components/Layout"  
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const about = ({data: { allContentfulRecipe: { nodes: recipes} }}) => {


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
        <section className="featured-recipes">
          <h5>look at this Deliciousness!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default about