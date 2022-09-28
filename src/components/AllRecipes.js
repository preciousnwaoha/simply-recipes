import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query) // desctructuring method
  // const recipes = data.allContentfulRecipe.nodes // drilling method

  return (
    <section className="recipes-container">

      <TagsList recipes={recipes}/>
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
