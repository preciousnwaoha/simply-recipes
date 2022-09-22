
import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Recipes = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Recipes Page</h1>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: red;

  & h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default Recipes
