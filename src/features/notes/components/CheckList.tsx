import useConf from '../../context/ConfContext';
import styles from '../styles/Notes.module.css';

const CheckList = ({ note }) => {

	const { title, asunto, date, id } = note,

		{ conf } = useConf()

	return (

		<article className={`${styles.notes} ${conf.theme}-note ${note.bgColor || conf.noteColor} ${conf.view}`} onClick={to}>

			<section>

				<h3>{title}</h3>

				<ul className={styles.notesText}>

					{asunto.map((el, i) => <li className={(el.finished) ? 'finished' : ''} key={i}>{el.value}</li>)}

				</ul>

			</section>

			<footer className={styles.footerNote}>

				<span>{date.slice(0, date.indexOf(','))}</span>

			</footer>

		</article>

	)

}

export default CheckList;