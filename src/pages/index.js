import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="slide slide--hero">
          <div className="slide-content">
            <h1>Innovative Websites</h1>
            <p className="tsl">Saving businesses from obscurity.</p>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h1>A Simple Solution</h1>
            <p>It's widely understood that websites can be difficult and complicated. I've spent 10 years working on websites for innovative startups so that I can bring that same level of innovation and simplicity to your small business website. Together we can make your website something you are proud to show off.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
