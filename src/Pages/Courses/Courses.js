import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
// import { connect } from 'react-redux';

// import CourseForm from './Components/CourseForm';
import CoursesList from './Components/CoursesList';
import ManageCourse from './Components/ManageCourse';

// import * as coursesActions from '../../Actions/CoursesActions';

import './Courses.css';

const Courses = ({ match }) => {
	return (
		<Switch>
			<Route path={match.path} exact component={CoursesList} />
			<Route path={`${match.path}/add-course`} component={ManageCourse} />
			<Route path={`${match.path}/:id`} component={ManageCourse} />
		</Switch>
	);
};

// class Courses extends Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.state = {
// 			course: {
// 				title: ''
// 			}
// 		};
//
// 		this.onFieldChange = this.onFieldChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
//
// 	onFieldChange(event) {
// 		this.setState({
// 			course: {
// 				...this.state.course,
// 				[event.target.name]: event.target.value
// 			}
// 		});
// 	}
//
// 	handleSubmit(event) {
// 		event.preventDefault();
//
// 		this.props.createCourse(this.state.course);
// 	}
//
// 	render() {
// 		return (
// 			<div className="Courses-Page">
// 				<PageHeader>Courses</PageHeader>
// 				<Grid>
// 					<Row>
// 						<Col xs={12} sm={3}>
// 							<CourseForm course={this.state.course}
// 													onFieldChange={this.onFieldChange}
// 													handleSubmit={this.handleSubmit}>
// 							</CourseForm>
// 						</Col>
// 					</Row>
// 					<Row>
// 						<Col xs={12} sm={6} smOffset={3}>
// 							<CoursesList courses={this.props.courses.entities} />
// 						</Col>
// 					</Row>
// 				</Grid>
// 			</div>
// 		);
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		createCourse: course => dispatch(coursesActions.createCourse(course))
// 	}
// }
//
// function mapStateToProps(state, ownProps) {
// 	return {
// 		courses: state.courses
// 	};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Courses);
export default Courses;
