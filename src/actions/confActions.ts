import { type theme, type view, type noteColor } from '../types/config'

export enum listActions {

	changeTheme = "changeTheme",
	changeView = "changeView",
	changeNoteColor = "changeNoteColor"

}

export type configActions =
	| { type: "changeTheme", payload: theme }
	| { type: "changeView", payload: view }
	| { type: "changeNoteColor", payload: noteColor };