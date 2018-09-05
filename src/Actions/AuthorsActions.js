import * as AuthorsActionTypes from '../ActionTypes/AuthorsActionTypes';
import MockAuthorApi from '../Api/MockAuthorApi';

export const getAuthorsError = (error) => {
	return {type: AuthorsActionTypes.GET_AUTHORS_ERROR, error};
};

export const getAuthorsStarted = () => {
	return {type: AuthorsActionTypes.GET_AUTHORS_STARTED};
};

export const getAuthorsSuccess = (authors) => {
	return {type: AuthorsActionTypes.GET_AUTHORS_SUCCESS, authors};
};

export const getAuthors = () => {
	return (dispatch) => {
		dispatch(getAuthorsStarted());

		return MockAuthorApi.getAllAuthors()
			.then(authors => {
				dispatch(getAuthorsSuccess(authors))
			})
			.catch(error => {
				dispatch(getAuthorsError(error));
			})
	}
};
