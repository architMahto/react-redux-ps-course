import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';

import * as CoursesActions from '../../../Actions/CoursesActions';

import CourseForm from './CourseForm';

class ManageCourse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authors: [],
			course: Object.assign({}, this.props.course),
			errors: {}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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
		alert(`Saving ${this.state.course.title}`);
	}

	render() {
		return (
			<div className="Manage-Course-Page">
				<PageHeader>Manage Course</PageHeader>
				<Grid fluid={true}>
					<Row>
						<Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
							<CourseForm course={this.state.course}
													authors={this.state.authors}
													errors={this.state.errors}
													onFieldChange={this.onFieldChange}
													onSubmit={this.onSubmit} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
	return { course };
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(CoursesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
