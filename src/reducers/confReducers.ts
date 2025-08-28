import { type configActions, listActions } from '../actions/confActions';
import { type config } from '../types/config';

export const initialStateConf: config = {

	theme: 'light',
	view: 'square',
	noteColor: 'bg-default'

}

export function confReducer(state: config = initialStateConf, action : configActions): config {

	switch (action.type) {

		case listActions.changeTheme: {

			const newConf = { ...state, theme: action.payload }

			localStorage.setItem('confNotes', JSON.stringify(newConf));

			return newConf;

		}

		case listActions.changeView: {

			const newConf = { ...state, view: action.payload }

			localStorage.setItem('confNotes', JSON.stringify(newConf));

			return newConf;

		}

		case listActions.changeNoteColor: {

			const newConf = { ...state, noteColor: action.payload }

			localStorage.setItem('confNotes', JSON.stringify(newConf));

			return newConf

		}

		default: return state;

	}

}