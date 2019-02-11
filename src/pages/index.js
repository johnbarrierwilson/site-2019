import React from "react"

import Blob from '../components/blob'
import Contact from '../components/contact'
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactFade: false,
      distance: 0,
      showContact: false
    }
    this.toggleContact = this.toggleContact.bind(this)
  }

  componentDidMount() {
    if (window.outerWidth > 1024) {
      window.addEventListener("scroll", () => {
        this.setState({
          distance: window.scrollY
        })
      })
    }
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll")
  // }

  toggleContact() {
    if (this.state.showContact) {
      this.setState({
        contactFade: true
      })
      setTimeout(() => {
        this.setState({
          contactFade: false,
          showContact: false,
        })
      }, 300)
    } else {
      this.setState({
        showContact: !this.state.showContact
      })
    }
  }

  render() {
    const date = new Date().getFullYear()
    return (
      <Layout>
        <Navigation toggleContact={this.toggleContact} />
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
            <h2>The Big Problem</h2>
            <p>The bland, templated website is too common. If your website doesn't stand out, you are loosing leads and potential customers. I believe it's wrong for your business be obscure and for you to feel unrecognized. Enough is enough, your website needs to truly reflect your incredible business.</p>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h2>A Simple Solution</h2>
            <p>It's widely understood that websites can be difficult and complicated. I've spent 10 years working on websites for innovative startups so that I can bring that same level of innovation and simplicity to your small business website. Together we can make your website something you are proud to show off.</p>
            <h3>Services</h3>
            <ul className="columns">
              <li>Messaging &amp; Strategy</li>
              <li>Information Architecture</li>
              <li>Concepts &amp; Prototypes</li>
              <li>Website Visual Design</li>
              <li>Website Development</li>
              <li>Maintenance &amp; Iteration</li>
            </ul>
            <button className="button" onClick={this.toggleContact}>Book Now</button>
          </div>
        </div>
        <div className="slide slide--process">
          <div className="slide-content">
            <h2>The Pragmatic Process</h2>
            <p>It's easier than you might think to bring innovation to your small business:</p>
            <ol className="process">
              <li>Schedule a consultation</li>
              <li>I’ll create your website</li>
              <li>Innovate your business</li>
            </ol>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h2>Your Future</h2>
            <p>If you continue to use templated sites, you'll continue to be obscure—that is incredibly dangerous for your business. The great news is that you can stand out, feel proud, earn more revenue and truly reflect your business through your website. It's just one click away.</p>
            <button className="button" onClick={this.toggleContact}>Book Now</button>
          </div>
        </div>
        <div className="slide slide--footer">
          <div className="slide-content">
            <hr />
            <div className="grid grid--split mbl">
              <div>
                <h5 className="mbs">Colophon</h5>
                <ul className="tss">
                  <li>Branding: <a href="https://www.carnleydesign.com/">Josh Carnley</a></li>
                  <li>Messaging: <a href="https://www.storybrand.com/">Storybrand</a></li>
                  <li>Type: <a href="https://luzi-type.ch/nantes">Nantes Light</a> &amp; <a href="https://luzi-type.ch/cadiz">Cadiz Regular</a></li>
                  <li>"Blob" Animation: <a href="https://www.threejs.org">Three.js</a></li>
                  <li>Stack: <a href="https://www.gatsbyjs.org">Gatsby.js</a> &amp; <a href="https://www.netlify.com">Netlify</a></li>
                </ul>
              </div>
              <div>
                <p className="tcn tss">This site does not track you.</p>
                <hr style={{marginBottom: 'none'}} />
                <p className="tss">Copyright {date}, John Barrier Wilson.<br />All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
        {this.state.showContact && <Contact fadeOut={this.state.contactFade} toggleContact={this.toggleContact} />}
      </Layout>
    )
  }
}

export default IndexPage
