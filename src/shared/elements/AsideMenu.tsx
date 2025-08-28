import useConf from '../../context/ConfContext';
import { listActions } from '../../actions/confActions';
import { NavLink } from 'react-router-dom';
import { type theme } from '../../types/config';
import styles from '../styles/MenuStyles.module.css';

const AsideMenu = () => {

	const { dispatch, conf } = useConf(),

		changeTheme = () => {

			let payload : theme = (conf.theme === 'light') ? 'dark' : 'light';

			dispatch({ type: listActions.changeTheme, payload });

		}

	return (

		<div className={`${styles.panel} hidden`}>

			<aside className={`${styles.menuContainer} ${conf.theme}`}>

				<div className={styles.menuHeader}>

					<i className="bi-x fs-2" onClick={() => false}></i>

				</div>

				<nav className={styles.asideMenu} onClick={() => false}>

					<div onClick={() => false}>

						<i className="bi-search fs--1"></i>
						<span className="mr-lf-2">Buscar</span>

					</div>

					<div onClick={() => false}>

						<i className="bi-sort-alpha-down fs-0"></i>
						<span className="mr-lf">Ordenar</span>

					</div>

					<div>

						<i className="bi-trash2 fs-0"></i>
						<NavLink className="mr-lf" to="/papelera">Papelera</NavLink>

					</div>

					<div onClick={changeTheme}>

						<i className={`${(conf.theme === 'dark' ? 'bi-moon-fill' : 'bi-sun-fill')} fs-0`}></i>
						<span className="mr-lf">Tema {conf.theme}</span>

					</div>

					<div onClick={() => false}>

						<i className="bi-eye fs-0"></i>
						<span className="mr-lf">Ver</span>

					</div>

				</nav>

			</aside>

		</div>

	)

}

export default AsideMenu;