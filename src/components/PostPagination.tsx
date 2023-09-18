import Link from 'next/link'
import React from 'react'

interface Props {
  totalPages: number,
  currentPage?: number
}

const PostPagination = ({totalPages, currentPage=1}:Props) => {
  return (
    <div className='flex gap-4'>
      <Link href={`/page/${currentPage - 1}`} className={`p-2 ${currentPage === 1 ? 'bg-gray-500 pointer-events-none' : 'bg-blue-500'}`}>Prev</Link>
      {
        Array.from({length: totalPages}, (_, i) => i + 1).map((number) => (
          <Link href={`/page/${number}`} key={number} className={number === currentPage ? 'bg-blue-500 text-white p-2' : 'p-2'}>{number}</Link>
        ))
      }
       <Link href={`/page/${currentPage + 1}`} className={`p-2 ${currentPage === totalPages ? 'bg-gray-500 pointer-events-none' : 'bg-blue-500'}`}>Next</Link>
    </div>
  )
}

export default PostPagination