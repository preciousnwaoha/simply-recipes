import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from '../components/SEO'

const Contact = ({data}) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" description="Contact Us from here" />
      <main className="page">
        <section className="contact-page">
        <article className={"contact-info"}>
          <h3>Want To Get In Touch?</h3>
        <p >
          Foor get these are the only outside yard stick bikjsbey mummy dam yes onlyfans gotcha nope noise necromanter forever in my heart is a tale of dishes
        </p>

        <p>
          Foor get these are the only outside yard stick bikjsbey mummy dam yes onlyfans gotcha 
        </p>

        <p>
          Foor get these are the only outside yard stick bikjsbey mummy dam yes onlyfans gotcha nope noise necromanter forever in my heart is a tale of dishes
        </p>
        </article>
       <article>
        <form action="https://formspree.io/f/mbjbonve" method="POST" className="form contact-form">
          <div className='form-row'>
            <label htmlFor="name">your name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className='form-row'>
            <label htmlFor="email">your email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-row">
            <label htmlFor='message'>message</label>
            <textarea name="message" id="message">

            </textarea>
          </div>
          <button type="submit" className='btn block'>submit</button>
        </form>
       </article>
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

export default Contact