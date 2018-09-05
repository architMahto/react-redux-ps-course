export const updateLoadableOnError = (error) => {
	return {
		isLoading: false,
		isReceived: false,
		error
	};
};
