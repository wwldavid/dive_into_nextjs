'use client'
import { addTodo } from '@/actions'
import React from 'react'

export default function ClientButton({children}:{children: React.ReactNode}) {
  return (
    <div>
       <button className='border p-2 ml-2' onClick={ async ()=> {
        const formData = new FormData()
        formData.append('todo','🎉')
        await addTodo(formData)
       }}>{children}</button>
    </div>
  )
}
