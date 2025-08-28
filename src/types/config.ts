export type theme = 'light' | 'dark'
export type view = 'square' | 'list'
export type noteColor = 'bg-blue' | 'bg-red' | 'bg-violet' | 'bg-green' | 'bg-pink' | 'bg-default'

export interface config {

  theme: theme
  view: view
  noteColor: noteColor

}