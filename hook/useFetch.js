import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, params) => {
	const [data, setData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jobsearch4.p.rapidapi.com/api/v1/Jobs/${endpoint}`,
		params: { ...params },
		headers: {
			"X-RapidAPI-Key": "1208df8556msh38c37d80315f887p1e5b54jsn41a6284627a7",
			"X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
		},
	};
	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);
			setData(response.data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setError(error);
			alert("There is an error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
