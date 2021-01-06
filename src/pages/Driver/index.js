import { useReducer } from 'react';
import { Stack, Skeleton, Heading } from '@chakra-ui/react';

import HeaderDriver from './Header';
import ListDriver from './List';
import { useDrivers } from 'config/api';

const initialState = { searchDriver: "" };

const reducer = (state, action) => {
	switch(action.type) {
		case "SEARCH":
			return ({
				...state,
				searchDriver: action.payload
			})
		default:
			return state;
	}
}

const Driver = () => {
	const { data, error, loading } = useDrivers();
	const [state, dispatch] = useReducer(reducer, initialState)
	const results = data?.results && state.searchDriver
		? data?.results?.filter(result => result.name.first.toLowerCase().indexOf(state.searchDriver.toLowerCase()) > -1)
		: data?.results;
	
	if(error) {
		<Heading>Maaf terjadi kesalahan...</Heading>
	}
	return (
		<Stack direction="column" spacing="1em">
			<HeaderDriver handleSearch={(value) => {dispatch({ type: "SEARCH", payload: value })}}/>
			<Skeleton isLoaded={!loading}>
				<ListDriver drivers={results} searchDriver={state.searchDriver}/>
			</Skeleton>
		</Stack>
	)
}

export default Driver;