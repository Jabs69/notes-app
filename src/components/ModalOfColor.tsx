import styles from '../styles/Modal.module.css';
import useConf from '../context/ConfContext';
import { type noteColor } from '../types/config';
import { listActions } from '../actions/confActions';

type Props = {
	noteId?: string
}

const ModalOfColor = ({ noteId }: Props) => {

	const arrayColors = ['bg-blue', 'bg-red', 'bg-violet', 'bg-green', 'bg-pink', 'bg-default'],

		{ dispatch } = useConf(),

		changeColor = (e: React.MouseEvent<HTMLDivElement>) => {

			const target = e.target as HTMLDivElement;

			dispatch({ type: listActions.changeNoteColor, payload: target.dataset.color as noteColor })

		}

	return (

		<div className={styles.modal}>

			<i className={`bi-x text-white ${styles.cross}`} onClick={() => false}></i>

			<section className={styles.colorModal}>

				{arrayColors.map((color) => <div data-color={color} className={`${color} ${styles.colorModalChild}`} key={color} onClick={changeColor}></div>)}

			</section>

		</div>

	)

}

export default ModalOfColor;