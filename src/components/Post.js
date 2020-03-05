import React, { Component } from 'react'
import PostItem from './PostItem'

class Post extends Component {
  render() {
    const { posts, reply, changeScore, onReply } = this.props
    return posts.map(
      post =>
        post != null && (
          <PostItem
            key={post.id}
            post={post}
            depth={3}
            reply={reply}
            changeScore={changeScore}
            onReply={onReply}
          />
        )
    )
  }
}
export default Post
