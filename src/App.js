import React, { useState } from 'react'
import './App.css'
import * as uuid from 'uuid'
import Post from './components/Post'
import AddPost from './components/AddPost'

const App = () => {
  const initState = []

  const [state, setstate] = useState(initState)

  const changeScore = (ind, adjustment) => {
    const index = [...ind]
    const newPosts = [...state]

    let post = newPosts
    while (index.length > 0) {
      if (index.length === 1) {
        post = post[index.shift()]
      } else {
        post = post[index.shift()].replies
      }
    }
    post.score += adjustment
    return setstate(newPosts)
  }
  const addPost = (newName, newBody) => {
    const added = {
      id: uuid.v1(),
      name: newName,
      body: newBody,
      score: 0,
      index: [state.length],
      replies: []
    }
    setstate([...state, added])
  }
  const onReply = (newName, newBody, ind) => {
    const index = [...ind]
    const newindex = [...ind]

    const newPosts = [...state]

    let post = newPosts
    while (index.length > 0) {
      if (index.length === 1) {
        post = post[index.shift()]
      } else {
        post = post[index.shift()].replies
      }
    }
    newindex.push(post.replies.length)
    const added = {
      id: uuid.v1(),
      name: newName,
      body: newBody,
      score: 0,
      index: newindex,
      replies: []
    }
    post.replies.push(added)
    setstate(newPosts)
  }

  return (
    <div className="App">
      <div className="container">
        <AddPost post={null} addPost={addPost} />
        <Post posts={state} onReply={onReply} changeScore={changeScore} />
      </div>
    </div>
  )
}

export default App
