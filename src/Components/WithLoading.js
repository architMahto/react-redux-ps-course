import React from 'react';

const WithLoading = (Component) => {
	return function WithLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) {
			return (<Component {...props} />);
		}

		return (<p>Loading...</p>);
	};
};

export default WithLoading;
