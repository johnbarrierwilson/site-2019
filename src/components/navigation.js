import React from 'react'

import Avatar from '../assets/images/logo-avatar.svg'
import Monogram from '../assets/images/logo-monogram.svg'

const Navigation = (props) => (
  <>
    <p className="logo">
      <img src={Avatar} alt="avatar based logo" />
      hi. my name is john&nbsp;barrier&nbsp;wilson
    </p>
    <button className="button button--fixed" onClick={props.toggleContact}>Book Now</button>
    <p className="tagline">hassle-free websites</p>
    <img className="monogram" src={Monogram} alt="monogram based logo" />
  </>
)

export default Navigation