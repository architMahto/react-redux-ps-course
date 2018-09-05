import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PageHeader } from 'react-bootstrap';

import * as AuthorsActions from '../../../Actions/AuthorsActions';
import * as CoursesActions from '../../../Actions/CoursesActions';

import ManageCourse from '../Components/ManageCourse';

import './ManageCourseContainer.css';

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
		this.authorsActions.getAuthors();
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
		this.history.push('/courses');
	}

	render() {
		return (
			<div className="Manage-Course-Page">
				<PageHeader>Manage Course</PageHeader>
				{/*<Grid fluid={true}>*/}
					{/*<Row>*/}
						{/*<Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>*/}
							{/*<CourseForm course={this.state.course}*/}
													{/*authors={this.props.authors}*/}
													{/*errors={this.state.errors}*/}
													{/*onFieldChange={this.onFieldChange}*/}
													{/*onSubmit={this.onSubmit} />*/}
						{/*</Col>*/}
					{/*</Row>*/}
				{/*</Grid>*/}
				<ManageCourse course={this.state.course}
											authors={this.props.authors}
											errors={this.state.errors}
											onFieldChange={this.onFieldChange}
											onSubmit={this.onSubmit} />
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
		authors: state.authors.entities.map(author => {
			return {value: author.id, text: `${author.firstName} ${author.lastName}`};
		}),
		course
	};
}

function mapDispatchToProps(dispatch) {
	return {
		authorsActions: bindActionCreators(AuthorsActions, dispatch),
		coursesActions: bindActionCreators(CoursesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourseContainer);
