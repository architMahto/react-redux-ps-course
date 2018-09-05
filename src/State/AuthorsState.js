import { createDefaultLoadable } from '../Utils/CreateDefaultLoadable';

export const createDefaultAuthorsState = () => {
	return {
		entities: [],
		...createDefaultLoadable()
	}
};
