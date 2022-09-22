import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query FirstQuery {
  site {
    info: siteMetadata {
      author
      description
      simpleData
      title
      person {
        age
        name
      }
      complexData {
        age
        name
      }
    }
  }
}
`

const FetchData = () => {
  
    const {site: {
        info: {title},
    }} = useStaticQuery(getData)

  return <div>
    {/* <h1>hello from fetch data</h1> */}
    <h2>site title is : {title}</h2>
  </div>
}

export default FetchData
