import React from 'react';

import ErrorState from './ErrorState';

import './WithLoading.css';

const WithLoading = (Component) => {
	return function WithLoadingComponent({ loadable, ...props }) {
		if (loadable.isReceived) {
			return (<Component {...props} />);
		}

		if (!!loadable.error) {
			return (<ErrorState errorMessage={loadable.error} />)
		}

		return (<div className="Loader" />);
	};
};

export default WithLoading;
