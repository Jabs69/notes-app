import useConf from '../context/ConfContext';
import { listActions } from '../actions/confActions';
import styles from '../styles/Modal.module.css';
import { type view } from '../types/config';

const ModalOfView = () => {

	const { conf, dispatch } = useConf(),

		handlerClick = (payload: view) => {

			dispatch({ type: listActions.changeView, payload })

		}

	return (

		<section className={styles.modal}>

			<div className={styles.cross} onClick={() => false}><i className="bi-x"></i></div>

			<aside className={`${styles.childModal} ${conf.theme}`}>

				<div className={styles.modalOption} onClick={() => handlerClick('square')}>

					<h3>Cuadricula</h3>

					<i className="bi-grid fs-5"></i>

				</div>

				<div className={styles.modalOption} onClick={() => handlerClick('list')}>

					<h3>Lista</h3>

					<i className="bi-view-stacked fs-5"></i>

				</div>

			</aside>

		</section>
	)

}

export default ModalOfView;