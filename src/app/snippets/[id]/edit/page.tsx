
import SnippetEditForm from '@/components/snippet-edit-form'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function page({params}:{params:{ id: string }}) {
  
  const id = parseInt(params.id)

  if(isNaN(id)) return notFound()

  const snippet = await db.snippet.findFirst({
    where: { id }
  })
  if(!snippet){
    return notFound()
  }

  return (
       <SnippetEditForm snippet={snippet} />
  )
}
