import React from 'react'
import classnames from 'classnames'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      hasSubmitted: false,
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    fetch('https://hooks.zapier.com/hooks/catch/3683678/xjl4vb/', {
      method: 'POST',
      body: JSON.stringify({
        "email": this.state.email,
        "name": this.state.name
      })}).then(this.setState({
        hasSubmitted: true,
      })).catch(error => alert(error));
  }

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
        {this.state.hasSubmitted ? 
          <p>Thanks so much! You should receive an email to schedule your consultation soon.</p>
        :
          <>
            <p>To schedule your free consultation, all I need is your name &amp; email!</p>
            <form className="form" onSubmit={this.handleSubmit}>
              <input className="input" name="name" type="text" placeholder="John Barrier Wilson" onChange={this.handleChange} value={this.state.name} required></input>
              <input className="input" name="email" type="email" placeholder="email@example.com" onChange={this.handleChange} value={this.state.email} required></input>
              <input className="button button--form" type="submit"></input>
            </form>
          </>
        }
      </div>
    )
  }
}

export default Contact