import COURSES_DATA from './CoursesData';
import delay from './Delay';

class MockCourseApi {
	static replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, 'g'), replace);
	}

	static generateId(course) {
		return this.replaceAll(course.title, ' ', '-');
	}

	static getAllCourses() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], COURSES_DATA));
			}, delay);
		});
	};

	static saveCourse(course) {
		let newCourse = Object.assign({}, course);

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minCourseTitleLength = 1;

				if (course.title.length < minCourseTitleLength) {
					reject(`Title must be at least ${minCourseTitleLength} characters.`);
				}

				if (course.id) {
					const existingCourseIndex = COURSES_DATA.findIndex(c => c.id === newCourse.id)
					COURSES_DATA.splice(existingCourseIndex, 1, course);
				} else {
					// Just simulating creation here.
					// The server would generate ids and watchHref's for new courses in a real app.
					// Cloning so copy returned is passed by value rather than by reference.
					newCourse.id = this.generateId(newCourse);
					newCourse.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
					COURSES_DATA.push(newCourse);
				}

				resolve(course);
			}, delay);
		});
	}

	static deleteCourse(courseId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfCourseToDelete = COURSES_DATA.findIndex(course => course.id === courseId);
				COURSES_DATA.splice(indexOfCourseToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default MockCourseApi;
