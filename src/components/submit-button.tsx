'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="border p-2 ml-2" disabled={ pending } >
      {pending ? 'submiting ...' : 'submit'}
      </button>
  )
}
