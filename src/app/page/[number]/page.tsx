import React from 'react'
import {getPagination} from '@/utils/pagination'
import PostList from '@/components/PostList';
import PostPagination from '@/components/PostPagination';
import { notFound } from 'next/navigation';
import { allPosts, Post } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a,b) => b.date.localeCompare(a.date));

interface Props {
    params:{
        number: string
    }
}

export const generateStaticParams = ()=>{
  return Array.from({length: posts.length}, (_, i) => i + 1).map((number) => ({number: number.toString()}))
}

const LayoutPages = ({params}:Props) => {
let arraycurrentPost;
let totalPagesNumber;
try {
  const {currentPosts, totalPages} = getPagination(posts, 3, params.number)
  arraycurrentPost = currentPosts;
  totalPagesNumber = totalPages;
} catch (error) {
  notFound()
}


  return (
    <>
      <div className="grid gap-4">
       <PostList posts={arraycurrentPost}/>
       {
        totalPagesNumber > 1 && <PostPagination totalPages={totalPagesNumber}  currentPage={parseInt(params.number)}/>
       }
      </div>
    </>
  )
}

export default LayoutPages