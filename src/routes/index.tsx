import { createFileRoute } from '@tanstack/react-router'
import NoteList from '@/features/notes/components/NoteList'

export const Route = createFileRoute('/')({
  component: NoteList,
})