import { createDefaultLoadable } from '../Utils/CreateDefaultLoadable';

export const createDefaultCoursesState = () => {
	return {
		entities: [],
		getCoursesLoadable: createDefaultLoadable(),
		saveCoursesLoadable: createDefaultLoadable()
	}
};
