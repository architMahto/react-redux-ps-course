import React from 'react';

import './WithLoading.css';

const WithLoading = (Component) => {
	return function WithLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) {
			return (<Component {...props} />);
		}

		return (<div className="Loader" />);
	};
};

export default WithLoading;
