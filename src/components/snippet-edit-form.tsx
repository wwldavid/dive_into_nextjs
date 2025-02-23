'use client'
import React from 'react'
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'

export default function SnippetEditForm({snippet}:{snippet: Snippet}) {
  return (
    <div>
      <Editor height="40vh" theme="vs-dark" language='javascript' options={{
        minimap: { enabled: false }
      }} defaultValue={snippet.code}/>
    </div>
  )
}
