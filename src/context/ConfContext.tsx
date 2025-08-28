import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { initialStateConf, confReducer } from '../reducers/confReducers';
import { type config } from '../types/config';
import { type configActions } from '../actions/confActions';

type confProviderProps = {

	children: React.ReactNode

}

type ConfContext = {

	conf: config
	dispatch: React.Dispatch<configActions>

}

const ConfContext = createContext({} as ConfContext),

	useConf = () => useContext(ConfContext),

	ConfProvider = ({ children } : confProviderProps) => {

		const [conf, dispatch] = useReducer(confReducer, initialStateConf),

			data: ConfContext = {

				conf,
				dispatch

			}

		return <ConfContext.Provider value={data}>{children}</ConfContext.Provider>

	}

export default useConf;
export { ConfProvider };