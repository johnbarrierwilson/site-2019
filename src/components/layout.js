import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "../assets/styles/application.scss"

import Avatar from '../assets/images/logo-avatar.svg'
import Monogram from '../assets/images/logo-monogram.svg'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <p className="logo">
          <img src={Avatar} alt="avatar based logo" />
          hi. my name is john&nbsp;barrier&nbsp;wilson
        </p>
        <Link className="button button--fixed" to="/">Book Now</Link>
        <p className="tagline">hassle-free websites</p>
        <img className="monogram" src={Monogram} alt="monogram based logo" />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
