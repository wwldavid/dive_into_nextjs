'use client'
import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { editSnippet } from '@/actions'

export default function SnippetEditForm({snippet}:{snippet: Snippet}) {
  const [code, setCode] = useState(snippet.code)
  const editSnipetWithOthers = editSnippet.bind(null, snippet.id, code)
  const handleChange = (code: string = '') => {
   setCode(code)
  }

  return (
    <div>
      <Editor height="40vh" theme="vs-dark" language='javascript' options={{
        minimap: { enabled: false }
      }} defaultValue={snippet.code}
       onChange={handleChange}
      />
      <form action={editSnipetWithOthers}>
        <button className='p-2 border border-teal-500' >Save</button>
      </form>
    </div>
  )
}
