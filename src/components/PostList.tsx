import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import React from 'react'
import PostItem from './PostItem'

interface Props {
    posts:Post[]
}

const PostList = ({posts}:Props) => {
  return (
    <>
     {posts.map((post) => (
          <PostItem key={post._id} post={post}/>
        ))}
    </>
  )
}

export default PostList