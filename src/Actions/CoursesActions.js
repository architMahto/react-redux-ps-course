export class CoursesActions {
	static CREATE_COURSE = 'CREATE_COURSE';
}

export const createCourse = (course) => {
	return {type: CoursesActions.CREATE_COURSE, course};
};
