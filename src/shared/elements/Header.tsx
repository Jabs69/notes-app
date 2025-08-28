import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useConf from '../../context/ConfContext';
import styles from '../../styles/Header.module.css';

const Header = () => {

	const nav = useNavigate(),

		{ conf } = useConf()

	return (

		<header className={`${styles.header} ${conf.theme}`}>

			<h1 className={styles.titleApp} onClick={() => nav("/")}>React Notes</h1>

			<section className={styles.options}>

				<i className={"bi-clipboard-check fs-1"} onClick={ () => false }></i>

				<i className={"bi-pencil-square fs-1"} onClick={ () => false }></i>

				<i className={"bi-list fs-2"} onClick={ () => false }></i>

			</section>

		</header>

	);

}

export default Header;
