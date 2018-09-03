import AUTHORS_DATA from './AuthorsData';
import delay from './Delay';

class MockAuthorApi {
	static generateId(author) {
		return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
	}

	static getAllAuthors() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], AUTHORS_DATA));
			}, delay);
		});
	}

	static saveAuthor(author) {
		let newAuthor = Object.assign({}, author);

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minAuthorNameLength = 3;

				if (newAuthor.firstName.length < minAuthorNameLength) {
					reject(`First name must be at least ${minAuthorNameLength} characters`);
				}

				if (newAuthor.lastName.length < minAuthorNameLength) {
					reject(`Last name must be at least ${minAuthorNameLength} characters`);
				}

				if (author.id) {
					const existingAuthorIndex  = AUTHORS_DATA.findIndex(author => author.id === newAuthor.id);
					AUTHORS_DATA.splice(existingAuthorIndex, 1, newAuthor);
				} else {
					//Just simulating creation here.
					//The server would generate ids for new authors in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					newAuthor.id = this.generateId(newAuthor);
					AUTHORS_DATA.push(newAuthor);
				}

				resolve(author);
			}, delay);
		});
	}

	static deleteAuthor(authorId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfAuthorToDelete = AUTHORS_DATA.findIndex(author => author.id === authorId);
				AUTHORS_DATA.splice(indexOfAuthorToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default MockAuthorApi;
