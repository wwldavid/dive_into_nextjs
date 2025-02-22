'use client'

import React, { useActionState } from 'react'
import { useFormState } from 'react-dom'
import SubmitButton from './submit-button'
import ClientButton from './client-button'
import { addTodo } from '@/actions'

const initialState = {
  message:'',
}

export default function SubmitForm() {
  const [ state, formAction ] = useActionState(addTodo, initialState)
  return (
    <>
    <div className="flex">
          <form action={formAction}>
             <input type="text" name="todo" className="border p-2" />
             <SubmitButton/>
          </form>
          <ClientButton> Icecream </ClientButton>
      </div>
      <p className='mt-2 text-teal-500 text-sm'>{state.message}</p>
    </>
  )
}
