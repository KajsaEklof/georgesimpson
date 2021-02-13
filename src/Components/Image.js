import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            relativePath
            base
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.allFile.edges.find(n => {
    console.log("allFiles", data.allFile)
    console.log("n", n)
    return n.node.relativePath === props.fileName
  })

  if (!image) {
    return null
  }

  const imageFluid = image.node.childImageSharp.fluid
  // const imageFixed = image.node.childImageSharp.fixed

  return <Img alt={props.alt} fluid={imageFluid} className=()/>
}
export default Image
