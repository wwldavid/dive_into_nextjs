
import { db } from '@/db'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const snippets = await db.snippet.findMany()
  console.log(snippets)
  return (
    <>
    <div className='flex items-center justify-between mt-5'>
      <h1 className='font-bold text-lg'>Snippets</h1>
      <Link className='p-2 border border-teal-500 rounded' href="/snippets/new">New</Link>
    </div>

    <div className='flex flex-col gap-2 mt-5'>
      {
        snippets.map(snippet =>
          <Link key={snippet.id} href={`/snippets/${snippet.id}`} className='flex items-center justify-between border border-teal-500 p-2 rounded-md'>
           <span>{snippet.title}</span>
           <span>View</span>
          </Link>
         )
      }
    </div>
    </>
  )
}
