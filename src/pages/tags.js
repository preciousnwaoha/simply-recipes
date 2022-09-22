import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const Tags = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Tags Page</h1>
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

export default Tags
