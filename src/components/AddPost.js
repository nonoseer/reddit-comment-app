import React, { Component } from 'react'

export class AddPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Name: '',
      Message: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    const { Name, Message } = this.state
    const { post, addPost, onReply } = this.props
    e.preventDefault()
    if (Name === '' || Message === '') {
      return
    }
    if (post === null) {
      addPost(Name, Message)
    } else {
      onReply(Name, Message, post.index)
    }
    this.setState({
      Name: '',
      Message: ''
    })
  }

  render() {
    const { Name, Message } = this.state

    return (
      <div className="container">
        <form id="contact" onSubmit={this.onSubmit}>
          <fieldset>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={Name}
              onChange={this.onChange}
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="Message"
              placeholder="Write a new Post..."
              value={Message}
              onChange={this.onChange}
            />
          </fieldset>
          <fieldset>
            <input type="submit" value="Submit" className="btn" />
          </fieldset>
        </form>
      </div>
    )
  }
}
export default AddPost
