import { db } from '@/db'
import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  async function createSnippet(formData: FormData){
    'use server'
    
    const title = formData.get('title') as string
    const code = formData.get('code') as string
    
    const snippet = await db.snippet.create({
      data: {
        title,
        code
      }
    })
    redirect('/')

  }


  return (

    <form action={createSnippet}>
        <h3 className='font-bold m-3 text-center'>Create a Snippet</h3>
        <div className='flex flex-col gap-4'>
          {/* Title */}
          <div className='flex gap-4' >
            <label className='w-12' htmlFor="title">Title</label>
            <input name='title' className='border border-teal-500 p-2 rounded w-full' type="text" id='title' />
          </div>
          {/* Code */}
          <div className='flex gap-4' >
            <label className='w-12' htmlFor="title">Code</label>
            <input name='code' className='border border-teal-500 p-2 rounded w-full' type="text" id='title' />
          </div>

          <button  className='rounded p-2 bg-blue-300' type='submit'>Create</button>
        </div>
    </form>

  )
}
