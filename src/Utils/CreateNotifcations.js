export const createDefaultNotification = () => {
	return {
		title: 'Default',
		message: 'Default Notification',
		status: 'default',
		position: 'tr',
		dismissible: true,
		closeButton: true
	}
};

export const createErrorNotification = (notification, message) => {
	return {
		...notification,
		title: 'Error',
		message,
		status: 'error',
		dismissible: true,
		dismissAfter: 5000,
		closeButton: true
	}
};

export const createLoadingNotification = (message) => {
	return {
		...createDefaultNotification(),
		title: 'Loading',
		message,
		status: 'loading',
		dismissible: false,
		dismissAfter: 0
	}
};

export const createSuccessNotification = (notification, message) => {
	return {
		...notification,
		title: 'Success',
		message,
		status: 'success',
		dismissible: true,
		dismissAfter: 5000,
		closeButton: true
	}
};

