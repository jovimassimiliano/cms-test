import axios from 'axios';
import { useState, useEffect } from 'react';

export const useDrivers = () => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});

	const fetchData = async () => {
		setError(false);
		setLoading(true);
		try {
			const { data } = await axios.get("https://randomuser.me/api/?results=30");
			setData(data);
		} catch (error) {
			setError(true)
		}finally{
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData();
	}, [])

	return { data, loading, error };
}