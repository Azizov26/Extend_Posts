import {useState} from 'react';

export const useFetching = (clallback) => {
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');

const fetching = async (...args) => {
	try{
		setIsLoading(true)
		await clallback(...args)
	} catch (e) {
		setError(e.message)
	} finally {
		setIsLoading(false)
	}
}

return [fetching, isLoading, error]
}