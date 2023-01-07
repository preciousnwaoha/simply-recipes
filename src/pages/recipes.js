import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import SEO from "../components/SEO"


const Recipes = () => {

  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
      <h4>Recipes Page</h4>
        <AllRecipes />
      </main>
        
    </Layout>
  )
}



export default Recipes
