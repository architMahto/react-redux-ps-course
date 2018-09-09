import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PageHeader } from 'react-bootstrap';

import * as AuthorsActions from '../../../Actions/AuthorsActions';
import * as CoursesActions from '../../../Actions/CoursesActions';

import ButtonLink from '../../../Components/ButtonLink';
import ManageCourse from '../Components/ManageCourse';
import WithLoading from '../../../Components/WithLoading';

import './ManageCourseContainer.css';

const ManageCourseWithLoading = WithLoading(ManageCourse);

class ManageCourseContainer extends Component {
	constructor(props) {
		super(props);

		this.authorsActions = props.authorsActions;
		this.coursesActions = props.coursesActions;
		this.history = props.history;
		this.match = props.match;
		this.state = {
			course: Object.assign({}, this.props.course),
			errors: {}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		if (this.match.params.hasOwnProperty('id') && !this.state.course.title) {
			this.history.push('/courses');
		}

		if (!this.props.authors.getAuthorsLoadable.isReceived) {
			this.authorsActions.getAuthors();
		}
	}

	onFieldChange(event) {
		this.setState({
			...this.state,
			course: {
				...this.state.course,
				[event.target.name]: event.target.value
			}
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.coursesActions.saveCourse(this.state.course);
	}

	buildAuthors() {
		return this.props.authors.entities.map(author => {
			return {value: author.id, text: `${author.firstName} ${author.lastName}`};
		})
	}

	render() {
		let authors = this.buildAuthors();

		return (
			<div className="Manage-Course-Page">
				<PageHeader>Manage Course</PageHeader>
				<ManageCourseWithLoading loadable={this.props.authors.getAuthorsLoadable}
																 course={this.state.course}
																 authors={authors}
																 loading={this.props.saveCoursesLoadable.isLoading}
																 errors={this.state.errors}
																 onFieldChange={this.onFieldChange}
																 onSubmit={this.onSubmit} />
				{
					this.props.authors.getAuthorsLoadable.error ?
						<ButtonLink buttonText={'Back to Courses'}
												route={'/courses'} /> :
						null
				}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.match.params.id;
	let course = courseId ?
		state.courses.entities.find(course => course.id === courseId) :
		{id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

	return {
		authors: state.authors,
		course,
		saveCoursesLoadable: state.courses.saveCoursesLoadable
	};
}

function mapDispatchToProps(dispatch) {
	return {
		authorsActions: bindActionCreators(AuthorsActions, dispatch),
		coursesActions: bindActionCreators(CoursesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourseContainer);
