import useNotes from '../context/NotesContext';
import useConf from '../context/ConfContext';
import Note from '@/shared/elements/Note';
import CheckList from '@/features/checklists/CheckList';

const MyNotes = () => {

	const { notes } = useNotes(),

		{ conf } = useConf(),

	return (

		<>

			<div className="grid-notes">

				

						: notes.map((note, i = 0) => {

							if (typeof note.asunto === 'object') return <CheckList note={note} key={i} />

							else return <Note note={note} key={i} />

			</div>

		</>

	);

}

export default MyNotes;