import React from 'react'
import classnames from 'classnames'

class Contact extends React.Component {
  render() {
    const classNames = classnames(
      'contact',
      {
        'is-fading': this.props.fadeOut
      }
    )
    return (
      <div className={classNames} >
        <button className="contact-close" onClick={this.props.toggleContact}>&times;</button>
        <h1>Book Now</h1>
        <p>All I need is your name, email and preferred date/time!</p>
        <form className="form">
          <input className="input" type="text" placeholder="John Barrier Wilson"></input>
          <input className="input" type="email" placeholder="email@example.com"></input>
          <input className="input" type="date"></input>
        </form>
      </div>
    )
  }
}

export default Contact