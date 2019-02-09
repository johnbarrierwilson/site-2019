import React from "react"
// import { Link } from "gatsby"

import Blob from '../components/blob'
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      distance: 0
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({
        distance: window.scrollY
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll")
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Blob shift={this.state.distance} />
        <div className="slide slide--hero">
          <div className="slide-content">
            <h1>Innovative Websites</h1>
            <p className="tsl">Saving businesses from obscurity.</p>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h1>The Big Problem</h1>
            <p>The bland website is too common among small businesses. If your website doesn't stand out, you are loosing leads and potential customers. I believe it's wrong for your business be obscure and for you to feel unrecognized. Enough is enough, your website needs to truly reflect your incredible business.</p>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h1>A Simple Solution</h1>
            <p>It's widely understood that websites can be difficult and complicated. I've spent 10 years working on websites for innovative startups so that I can bring that same level of innovation and simplicity to your small business website. Together we can make your website something you are proud to show off.</p>
            <h3>Services</h3>
            <ul>
              <li>Messaging &amp; Strategy</li>
              <li>Information Architecture</li>
              <li>Concepts &amp; Prototypes</li>
              <li>Website Visual Design</li>
              <li>Website Development</li>
              <li>Maintenance &amp; Iteration</li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
