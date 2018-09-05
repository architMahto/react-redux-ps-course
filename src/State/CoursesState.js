import { createDefaultLoadable } from '../Utils/CreateDefaultLoadable';

export const createDefaultCoursesState = () => {
	return {
		entities: [],
		...createDefaultLoadable()
	}
};
