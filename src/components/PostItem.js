import React, { Component } from 'react'
import AddPost from './AddPost'
import Score from './Score'

export class PostItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showReplyBox: false
    }
  }

  getStyle = () => {
    return {
      background: '#f5f5f5',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  onbut = () => {
    const { showReplyBox } = this.state
    this.setState({ showReplyBox: !showReplyBox })
  }

  render() {
    const { depth, post, changeScore, onReply } = this.props
    const { showReplyBox } = this.state

    if (depth === 0) {
      return null
    }

    return (
      <div>
        <b> </b>
        <div style={this.getStyle()}>
          <p style={{ color: 'blue' }}>
            {post.name}
            <Score post={post} changeScore={changeScore} />
          </p>
          <p>{post.body}</p>

          {depth !== 1 ? (
            <button type="button" onClick={this.onbut}>
              reply
            </button>
          ) : null}
          {post.replies.map(child => (
            <PostItem
              key={child.id}
              post={child}
              depth={depth - 1}
              reply={child.reply}
              changeScore={changeScore}
              onReply={onReply}
            />
          ))}

          {showReplyBox ? <AddPost post={post} onReply={onReply} /> : null}
        </div>
      </div>
    )
  }
}

export default PostItem
