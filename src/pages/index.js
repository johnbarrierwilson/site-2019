import React from "react"
import {graphql} from 'gatsby'

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
    this.slideBlob = this.slideBlob.bind(this)
    this.toggleContact = this.toggleContact.bind(this)
  }

  componentDidMount() {
    if (window.outerWidth >= 1050) {
      window.addEventListener("scroll", this.slideBlob)
    }
  }

  componentWillUnmount() {
    if (window.outerWidth >= 1050) {
      window.removeEventListener("scroll", this.slideBlob)
    }
  }

  slideBlob() {
    const blob = document.getElementById('blob')
    const distance = window.scrollY
    if (distance >= 450) {
      blob.style = 'transform: translateX(-22.5%)'
    } else {
      blob.style = `transform: translateX(${distance * -0.05}%)`
    }
  }

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
    const shots = this.props.data.allDribleProjects.edges
    const date = new Date().getFullYear()
    return (
      <Layout>
        <Navigation toggleContact={this.toggleContact} />
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Blob />
        <div className="slide slide--hero">
          <div className="slide-content">
            <h1>Unique Websites</h1>
            <p className="tsl">Helping you save your business from obscurity.</p>
            <button className="button button--inverted" onClick={this.toggleContact}>Book a call</button>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h2>The Big Problem</h2>
            <p className="tsl">The bland Squarespace and Wix websites are too common. If your website doesn't stand out, you will lose leads and potential customers. Enough is enough, you need to be recognized for all your hard work and your website needs to truly reflect your incredible&nbsp;business.</p>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h2>A Simple Solution</h2>
            <p>I get it, websites can be complicated so Squarespace and Wix are easy solutions. At the same time, you should know that I've spent 10 years working on websites for innovative startups so that I can bring that same level of creativity, innovation and simplicity to your website. Together we can make your website something you are truly proud to show off.</p>
            <h3>My services for your success...</h3>
            <ul className="columns">
              <li>Messaging &amp; Strategy</li>
              <li>Information Architecture</li>
              <li>Concepts &amp; Prototypes</li>
              <li>Website Visual Design</li>
              <li>Website Development</li>
              <li>Maintenance &amp; Iteration</li>
            </ul>
            <button className="button" onClick={this.toggleContact}>Book a call</button>
          </div>
        </div>
        <div className="slide slide--center">
          <div className="slide-content">
            <h2>My Work</h2>
            <div className="grid grid--shots">
              {shots.map((shot, index) => (
                <a className="shot" href={shot.node.url} key={`${shot.node.name}-${index}`}>
                  <img src={shot.node.cover} alt={`shot from dribble titled ${shot.node.title}`} />
                </a>
              ))}
            </div>
            <a href="https://www.dribbble.com/johnbarrierwilson" className="button">View More</a>
          </div>
        </div>
        <div className="slide slide--center">
          <div className="slide-content">
            <h2>The Process</h2>
            <p>It's easier than you might think to bring innovation to your small business:</p>
            <ol className="process">
              <li>Schedule a free&nbsp;consultation</li>
              <li>We design &amp; I build your&nbsp;website</li>
              <li>Proudly share and grow your&nbsp;business</li>
            </ol>
            <button className="button" onClick={this.toggleContact}>Book a call</button>
          </div>
        </div>
        <div className="slide">
          <div className="slide-content">
            <h2>Your Future</h2>
            <p>Stop wasting money on large agencies who charge a lot to create a boring, standard website. You can easily stand out, feel proud, earn more money and truly reflect your business through your website. <span className="tco">It's&nbsp;just&nbsp;one&nbsp;click&nbsp;away.</span></p>
            <button className="button" onClick={this.toggleContact}>Book a call</button>
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
                  <li>"Blob" Animation: <a href="https://threejs.org">Three.js</a></li>
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

export const query = graphql`
  query homepageQuery {
    allDribleProjects (
      limit: 8,
      sort: {fields: [published], order: DESC}
    ) {
      edges {
        node {
          cover
          title
          url
        }
      }
    }
  }
`

export default IndexPage
