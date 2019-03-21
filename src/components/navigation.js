import { Link } from 'gatsby'
import React from 'react'

import Avatar from '../assets/images/logo-avatar.svg'
import Monogram from '../assets/images/logo-monogram.svg'

const Navigation = (props) => (
  <>
    <Link to="/" className="logo">
      <img src={Avatar} alt="avatar based logo" />
      <span>hi. my name is john&nbsp;barrier&nbsp;wilson</span>
    </Link>
    <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/article">Articles</Link>
      <Link to="/resources">Resources</Link>
      <button className="button" onClick={props.toggleContact}>Book a call</button>
    </div>
    <p className="tagline">ui/ux design + development</p>
    <img className="monogram" src={Monogram} alt="monogram based logo" />
  </>
)

export default Navigation