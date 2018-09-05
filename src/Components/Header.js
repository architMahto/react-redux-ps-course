import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Grid, Image, Nav, Navbar, NavItem} from 'react-bootstrap';

import './Header.css';
import logo from '../logo.svg';

const Header = () => {
	return (
		<Navbar className="App-navbar" inverse>
			<Grid>
				<Navbar.Header>
					<Navbar.Brand>
						<LinkContainer className="App-logo-link" to="/">
							<Image src={logo} className="App-logo" />
						</LinkContainer>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<IndexLinkContainer to="/">
							<NavItem eventKey={1}>Home</NavItem>
						</IndexLinkContainer>
						<LinkContainer to="/about">
							<NavItem eventKey={2}>About</NavItem>
						</LinkContainer>
						<LinkContainer to="/courses">
							<NavItem eventKey={3}>Courses</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Grid>
		</Navbar>
	);
};

export default Header;
