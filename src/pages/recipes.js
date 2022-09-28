import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"


const Recipes = () => {
  return (
    <Layout>
      <main className="page">
      <h4>Recipes Page</h4>
        <AllRecipes />
      </main>
        
    </Layout>
  )
}



export default Recipes
