import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Contact from '../components/contact'
import Layout from '../components/layout'
import Navigation from '../components/navigation'

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactFade: false,
      showContact: false
    }
    this.toggleContact = this.toggleContact.bind(this)
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
    const image = this.props.data.file.childImageSharp.fluid
    console.log(image)
    return (
      <Layout>
        <Navigation toggleContact={this.toggleContact} />
        <div className='hero'>
          <Img fluid={image} className='hero-image' />
          <div className='hero-content'>
            <h1>About John</h1>
            <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        {this.state.showContact && <Contact fadeOut={this.state.contactFade} toggleContact={this.toggleContact} />}
      </Layout>
    )
  }
}

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`