import * as AuthorsActionTypes from '../ActionTypes/AuthorsActionTypes';
import MockAuthorApi from '../Api/MockAuthorApi';

export const getAuthorsSuccess = (authors) => {
	return {type: AuthorsActionTypes.GET_AUTHORS_SUCCESS, authors};
}

export const getAuthors = () => {
	return (dispatch) => {
		return MockAuthorApi.getAllAuthors()
			.then(authors => {
				dispatch(getAuthorsSuccess(authors))
			})
			.catch(error => {
				throw(error);
			})
	}
};
