import React from 'react'

import Avatar from '../assets/images/logo-avatar.svg'
import Monogram from '../assets/images/logo-monogram.svg'

const Navigation = (props) => (
  <>
    <p className="logo">
      <img src={Avatar} alt="avatar based logo" />
      <span>hi. my name is john&nbsp;barrier&nbsp;wilson</span>
    </p>
    <button className="button button--fixed" onClick={props.toggleContact}>Book a call</button>
    <p className="tagline">unique websites</p>
    <img className="monogram" src={Monogram} alt="monogram based logo" />
  </>
)

export default Navigation